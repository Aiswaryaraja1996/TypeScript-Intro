declare let myName: string;
declare let age: number;
declare let isFetching: boolean;
declare let numList: number[];
declare var values: Array<any>;
declare var tuple: [string, boolean];
declare enum UserPrivileges {
    USER = "USER",
    SUPER_USER = "SUPER_USER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN"
}
declare function checkPrivileges(privilege: UserPrivileges): void;
declare const p = UserPrivileges.SUPER_ADMIN;
declare function product(x: number, y: number): number;
declare function divide(x: number, y: number): number;
declare function printName(x: string, y?: string): void;
interface dataTypes {
    title: string;
    status: boolean;
    id: number;
}
interface fullName {
    firstname: string;
    lastname?: string;
}
declare function getName(props: fullName): string;
declare let obj: {
    firstname: string;
};
declare let obj2: {
    firstname: string;
    lastname: string;
};
interface Address {
    houseNumber: string | number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    prefix?: string;
    phones: string[];
    address: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare var Persons: Array<PersonDetails>;
declare function PhoneBook(props: PersonDetails): void;
declare var p1: {
    prefix: string;
    phones: string[];
    address: string[];
    firstname: string;
    lastname: string;
};
interface User {
    type: "user";
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    type: "admin";
    name: string;
    age: number;
    role: string;
}
declare type per = User | Admin;
declare const persons: per[];
declare function isAdmin(person: per): boolean;
declare function isUser(person: per): boolean;
