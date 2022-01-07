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
