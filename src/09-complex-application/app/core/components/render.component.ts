import { Signal } from "../../models/signal";
import { SignalType } from "../../models/signal-type";
import { SignalServices } from "../../services/signals-service";

export interface RenderComponent {
    render():void;
}