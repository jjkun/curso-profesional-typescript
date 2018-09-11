var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    //Parameter properties
    function User(id, firstName, email) {
        this.id = id;
        this.firstName = firstName;
        this.email = email;
        this.MAX_CONNECTINS = 3;
    }
    User.prototype.login = function () {
        console.log('>> login');
    };
    return User;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(id, firstName, tId) {
        var _this = _super.call(this, id, firstName) || this;
        _this._tId = tId;
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "tId", {
        get: function () {
            return this._tId;
        },
        set: function (tId) {
            this.tId = tId;
        },
        enumerable: true,
        configurable: true
    });
    return Teacher;
}(User));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(id, firstName, sId, email) {
        var _this = _super.call(this, id, firstName, email) || this;
        _this.sId = sId;
        return _this;
    }
    return Student;
}(User));
var luis = new Teacher(1, 'Juanito', 'Teacher ID 01');
var esmeralda = new Student(2, 'Esmeralda', 'S01');
luis.tId = 'Teacher ID 1005';
console.log(luis.tId);
luis.login();
