var UserProfile = /** @class */ (function () {
    function UserProfile(name, password) {
        this.name = name;
        this.password = password;
        this.username = name + name.length;
        this.email = "".concat(this.name + name.length, "@gmail.com");
    }
    return UserProfile;
}());
var User1 = new UserProfile("Muhammad Ahmed", 101323);
console.log(User1);
