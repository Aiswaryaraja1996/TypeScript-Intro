//create a type name with a string
var myName = "Aiswarya";
console.log(myName);
// create a type age with a number
var age = 25;
console.log(age);
// create a type isFetching with boolean
var isFetching = true;
console.log(isFetching);
// create an array of numbers
var numList = [];
numList.push(1);
numList.push(2);
console.log(numList);
// create an array of strings (using array constructor generic type)
var values = ["Apple", 2, "Orange", 3, 4, "Banana"];
console.log(values);
// create a tuple , which keeps a string as the first value, and boolean as the second
var tuple = ["Aiswarya", true];
console.log(tuple);
// create an enum
// it should have User, SuperUser, Admin, SuperAdmin
var UserPrivileges;
(function (UserPrivileges) {
    UserPrivileges["USER"] = "USER";
    UserPrivileges["SUPER_USER"] = "SUPER_USER";
    UserPrivileges["ADMIN"] = "ADMIN";
    UserPrivileges["SUPER_ADMIN"] = "SUPER_ADMIN";
})(UserPrivileges || (UserPrivileges = {}));
function checkPrivileges(privilege) {
    switch (privilege) {
        case UserPrivileges.USER: {
            console.log("You are a user.");
            break;
        }
        case UserPrivileges.SUPER_USER: {
            console.log("You are a super user.");
            break;
        }
        case UserPrivileges.ADMIN: {
            console.log("You are an admin.");
            break;
        }
        case UserPrivileges.SUPER_ADMIN: {
            console.log("You are a superAdmin.");
            break;
        }
        default:
            console.log("You dont have any privileges.");
            break;
    }
}
var p = UserPrivileges.SUPER_ADMIN;
checkPrivileges(p);
// create a function that takes 2 arguments, x, y both numbers
// it should return the product of the 2 numbers
function product(x, y) {
    return x * y;
}
console.log(product(3, 4));
// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )
function divide(x, y) {
    return x / y;
}
console.log(divide(3, 4));
// create a function that takes a name and prints it without returning anything
function printName(x, y) {
    console.log(x + " " + y);
}
printName("Aiswarya", "R");
