//Tuples
var tuple;
function updateTuple() {
    tuple = [3, 4, 5];
}
//Enums
var Role;
(function (Role) {
    Role[Role["STUDENT"] = 0] = "STUDENT";
    Role[Role["TEACHER"] = 1] = "TEACHER";
    Role[Role["ADMIN"] = 2] = "ADMIN";
})(Role || (Role = {}));
var teacherRole = Role.TEACHER;
//Any
var unknowValue;
unknowValue = 4;
unknowValue = true;
unknowValue = 'trong';
unknowValue = [];
//Void
function printMessage() {
}
