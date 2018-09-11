(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
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
    exports.ComponentManager = ComponentManager;
});
