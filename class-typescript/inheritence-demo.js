var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(username, age) {
        this.userName = username;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("Your username is ".concat(this.userName, " and your age is ").concat(this.age));
    };
    ;
    return User;
}());
// let user1 = new User("Nafiur",25);
// user1.display();
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(username, age, studentid) {
        var _this = _super.call(this, username, age) || this;
        _this.studentId = studentid;
        return _this;
    }
    return Student;
}(User));
var student1 = new Student('nafiur', 23, 7909);
student1.display();
