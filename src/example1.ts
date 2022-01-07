//create a type name with a string

let myName: string = "Aiswarya";

console.log(myName);

// create a type age with a number

let age: number = 25;

console.log(age);

// create a type isFetching with boolean

let isFetching: boolean = true;

console.log(isFetching);

// create an array of numbers

let numList: number[] = [];

numList.push(1);
numList.push(2);

console.log(numList);

// create an array of strings (using array constructor generic type)

var values: Array<any> = ["Apple", 2, "Orange", 3, 4, "Banana"];

console.log(values);

// create a tuple , which keeps a string as the first value, and boolean as the second

var tuple: [string, boolean] = ["Aiswarya", true];

console.log(tuple);

// create an enum
// it should have User, SuperUser, Admin, SuperAdmin

enum UserPrivileges {
  USER = "USER",
  SUPER_USER = "SUPER_USER",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

function checkPrivileges(privilege: UserPrivileges) {
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

function product(x: number, y: number): number {
  return x * y;
}

console.log(product(3, 4));

// create a function that takes 2 arguments, x ,y both numbers,
// it should divide output ( x / y )

function divide(x: number, y: number): number {
  return x / y;
}

console.log(divide(3, 4));

// create a function that takes a name and prints it without returning anything

function printName(x: string, y?: string): void {
  console.log(x + " " + y);
}

printName("Aiswarya", "R");
