import {OnInitComponent } from "./on-init-component";

export class ComponentManager{
    components : Array<OnInitComponent> = [];
    addComponent(component:OnInitComponent){
        this.components.push(component);
    }
    render(){
        this.components.forEach(component => component.onInit());
    }
}
