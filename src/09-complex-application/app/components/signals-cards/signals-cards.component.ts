import { Signal } from "../../models/signal";
import { SignalType } from "../../models/signal-type";
import { SignalServices } from "../../services/signals-service";
import { RenderComponent } from "../../core/components/render.component";
import { BaseComponent } from "../../core/components/base.component";
import { ConstructorComponentOptions } from "../../core/options/constructor-component-options";

import * as template from  './signals-cards.component.hbs';
import { ApiConfig } from "../../config/api-config";
import { StringUtils } from "../../utils/string-utils";

export class SignalsCardsComponent extends BaseComponent implements RenderComponent {
    signals: Array<Signal> = [];
    signalTypes: Array<SignalType> = [];
    constructor(options: ConstructorComponentOptions, private _signalService: SignalServices = new SignalServices()){ 
        super(options);
    }

    render() {
        //const template = require("./signals-cards.component.hbs");
        console.log(template);
        this._signalService.getSignals().then(response => {
            this.signals = this.transformSignalsData(response.data.signals);
            this.signalTypes = this.extractSignalTypes(response.data.signals);
            this.applyRenderFromParentComponent(this.signals,this.signalTypes);
            this.applyUIEvents();
        });
    }

    applyRenderFromParentComponent(signals: Array<Signal>, signalTypes: Array<SignalType>){
        super.render({
            data: {
                signals:signals,
                signalTypes: signalTypes
            },
            template
        });
    }

    transformSignalsData(signals: Array<Signal>) {
        return signals.map(signal => {
            return {
                filename: signal.filename,
                imageUrl: `${ApiConfig.BASE_URL}/traffic-signals-images/sct/${signal.filename}`,
                name: signal.name,
                description : signal.description,
                summary: StringUtils.cutString(signal.description),
                type: signal.type
            }
        });
    }

    isSignalTypeItemInArray(item: SignalType, array: Array<SignalType>): boolean {
        return array.filter(type => type.name === item.name).length > 0;
    }

    extractSignalTypes(signals: Array<Signal>) {
        const signalTypes: Array<SignalType> = [];
        console.log(signalTypes);
        signals.forEach(signal => {
            if(!this.isSignalTypeItemInArray(signal.type,signalTypes)){
                signalTypes.push(signal.type);
            }
        });
        return signalTypes;
    }

    applyUIEvents(){
        const $select = document.querySelector("#signalTypes") as HTMLSelectElement;
        //$('select').on('change',function(){})
        $select.onchange = (Event) => {
            console.log('Change');
            const selectedValue = (event.target as any).value;
            if(selectedValue !== "-1"){
                // 1) filtrar 
                const filteredSignals = this.signals.filter(signal => signal.type.id === selectedValue);
                //2) redderizar
                this.applyRenderFromParentComponent(filteredSignals,this.signalTypes);
                //3) seleccionar el índice
                const findSelectedIndex = (signalTypes:Array<SignalType>, selectedValue: string): number => {
                    return signalTypes.findIndex((type:SignalType) => type.id === selectedValue);
                };
                (document.querySelector('#signalTypes') as HTMLSelectElement)
                .selectedIndex = findSelectedIndex(this.signalTypes,selectedValue) + 1;
            } else {
                this.applyRenderFromParentComponent(this.signals,this.signalTypes);
            }
            this.applyUIEvents();
        }
    }

}