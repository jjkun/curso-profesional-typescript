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
    var CardsComponent = /** @class */ (function () {
        function CardsComponent() {
        }
        CardsComponent.prototype.onInit = function () {
            console.log('>> CardsComponent > onInit');
        };
        return CardsComponent;
    }());
    exports.CardsComponent = CardsComponent;
});
