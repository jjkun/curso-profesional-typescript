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
    function User(id, firstName, email) {
        this.id = id;
        this.firstName = firstName;
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
        _this.tId = tId;
        return _this;
    }
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
var luis = new Teacher(1, 'Juanito', 'T01');
var esmeralda = new Student(2, 'Esmeralda', 'S01');
console.log(luis.firstName);
luis.login();
