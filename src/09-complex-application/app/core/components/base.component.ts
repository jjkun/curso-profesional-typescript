import { ConstructorComponentOptions } from "../options/constructor-component-options";
import { RenderOptions } from "../options/render-options";

export class BaseComponent {
    selector : string;
    constructor(options : ConstructorComponentOptions) {
        this.selector = options.selector;
    }

    render(options:RenderOptions){
        if(this.selector){
            const $element = document.querySelector(this.selector); 
            $element.innerHTML = options.template(options.data);
        }
    }
}