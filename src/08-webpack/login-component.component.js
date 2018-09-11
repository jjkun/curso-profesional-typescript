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
    var LoginComponent = /** @class */ (function () {
        function LoginComponent() {
        }
        LoginComponent.prototype.onInit = function () {
            console.log('>> LoginComponent > onInit');
        };
        return LoginComponent;
    }());
    exports.LoginComponent = LoginComponent;
});
