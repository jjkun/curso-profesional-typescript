(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./login-component.component", "./cards-component.component", "./components-manager"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var login_component_component_1 = require("./login-component.component");
    var cards_component_component_1 = require("./cards-component.component");
    var components_manager_1 = require("./components-manager");
    var App = /** @class */ (function () {
        function App() {
        }
        App.prototype.start = function () {
            var manager = new components_manager_1.ComponentManager();
            manager.addComponent(new login_component_component_1.LoginComponent());
            manager.addComponent(new cards_component_component_1.CardsComponent());
            manager.render();
        };
        return App;
    }());
    new App().start();
});
