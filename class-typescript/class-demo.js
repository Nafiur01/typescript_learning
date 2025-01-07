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
var user1 = new User("Nafiur", 25);
user1.display();
