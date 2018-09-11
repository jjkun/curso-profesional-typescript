var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.onInit = function () {
        console.log('>> LoginComponent > onInit');
    };
    return LoginComponent;
}());
var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.onInit = function () {
        console.log('>> CardsComponent > onInit');
    };
    return CardsComponent;
}());
var ComponentManager = /** @class */ (function () {
    function ComponentManager() {
        this.components = [];
    }
    ComponentManager.prototype.addComponent = function (component) {
        this.components.push(component);
    };
    ComponentManager.prototype.render = function () {
        this.components.forEach(function (component) { return component.onInit(); });
    };
    return ComponentManager;
}());
var manager = new ComponentManager();
manager.addComponent(new LoginComponent());
manager.addComponent(new CardsComponent());
manager.render();
