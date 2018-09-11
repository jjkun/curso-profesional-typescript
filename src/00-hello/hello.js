var Person = /** @class */ (function () {
    function Person(firstName) {
        this.firstName = firstName;
    }
    Person.prototype.getName = function () {
        console.log('name', this.firstName);
    };
    return Person;
}());
new Person('elJJ').getName();
