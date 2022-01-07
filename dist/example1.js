//create a type name with a string
let myName = "Aiswarya";
console.log(myName);
// create a type age with a number
let age = 25;
console.log(age);
// create a type isFetching with boolean
let isFetching = true;
console.log(isFetching);
// create an array of numbers
let numList = [];
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
const p = UserPrivileges.SUPER_ADMIN;
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
function getName(props) {
    if (props.lastname)
        return props.firstname + " " + props.lastname;
    else
        return props.firstname;
}
let obj = { firstname: "Aiswarya" };
let obj2 = { firstname: "Aiswarya", lastname: "R" };
console.log(getName(obj));
console.log(getName(obj2));
// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons
var Persons = [];
function PhoneBook(props) {
    Persons.push(props);
}
var p1 = { prefix: "Ms", phones: ['9562152083', '9048934825'], address: ["Palakkad"], firstname: "Aiswarya", lastname: "R" };
PhoneBook(p1);
console.log(Persons);
