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

// create an interface for an object
// it should accept a title string
// it should accept a status boolean
// it should accept an id number

interface dataTypes {
  title: string;
  status: boolean;
  id: number;
}

// create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it

interface fullName {
  firstname: string;
  lastname?: string;
}

function getName(props: fullName): string {
  if (props.lastname) return props.firstname + " " + props.lastname;
  else return props.firstname;
}
let obj = { firstname: "Aiswarya" };
let obj2 = { firstname: "Aiswarya", lastname: "R" };
console.log(getName(obj));
console.log(getName(obj2));

// create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

interface Address {
  houseNumber: string | number;
  street: string, 
  city: string, 
  state: string, 
  postalCode:number,
  country: string
}

// create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

interface PersonDetails{
  prefix?: string, 
  phones:string[],
  address : string[],
  email?:string, 
  firstname: string, 
  lastname: string,
  middlename?: string
}


// create a function PhoneBook
// it should accept PersonDetails type argument
// it should push into an array containing all persons

var Persons : Array<PersonDetails> = [];

function PhoneBook(props:PersonDetails){
  Persons.push(props);
}

var p1 = {prefix:"Ms" ,phones:['9562152083','9048934825'],address:["Palakkad"],firstname:"Aiswarya", lastname:"R"}

PhoneBook(p1);

console.log(Persons);

