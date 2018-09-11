interface OnInitComponent{
    onInit():void;
}

class LoginComponent implements OnInitComponent {
    onInit():void{
        console.log('>> LoginComponent > onInit');
    }
}

class CardsComponent implements OnInitComponent {
    onInit():void{
        console.log('>> CardsComponent > onInit');
    }
}

class ComponentManager{
    components : Array<OnInitComponent> = [];
    addComponent(component:OnInitComponent){
        this.components.push(component);
    }
    render(){
        this.components.forEach(component => component.onInit());
    }
}

let manager = new ComponentManager();
manager.addComponent(new LoginComponent());
manager.addComponent(new CardsComponent());
manager.render();