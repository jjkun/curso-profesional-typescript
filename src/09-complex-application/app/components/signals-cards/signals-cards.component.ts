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
            this.applyRenderFromParentComponent(template,this.signals,this.signalTypes);
        });
    }

    applyRenderFromParentComponent(template,signals: Array<Signal>, signalTypes: Array<SignalType>){
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
}