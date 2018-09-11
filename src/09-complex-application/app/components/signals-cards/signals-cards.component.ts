import { Signal } from "../../models/signal";
import { SignalType } from "../../models/signal-type";
import { SignalServices } from "../../services/signals-service";
import { RenderComponent } from "../../core/components/render.component";
import { BaseComponent } from "../../core/components/base.component";
import { ConstructorComponentOptions } from "../../core/options/constructor-component-options";


export class SignalsCardsComponent extends BaseComponent implements RenderComponent {
    signals: Array<Signal> = [];
    signalTypes: Array<SignalType> = [];
    constructor(options: ConstructorComponentOptions, private _signalService: SignalServices = new SignalServices()){ 
        super(options);
    }

    render() {
        const template = require("./signals-cards.component.hbs");
        console.log(template);
        this._signalService.getSignals().then(response => {
            this.signals = response.data.signals;
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

    extractSignalTypes(signals: Array<Signal>) {
        return [];
    }
}