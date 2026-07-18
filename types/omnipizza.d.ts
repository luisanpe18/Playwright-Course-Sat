export type CountryCode = "MX" | "US" | "CH" | "JP";
export type Currency = "MXN" | "USD" | "CHF" | "JYP";
export type Role = "costumer";

export interface User {
    username: string;
    password: string;
    role?: Role;
    description?: string;
}

export interface Market {
    code: CountryCode;
    currency: Currency;
    fullname: string;
    phone: string;
    address: string;
    colonia?: string;
    zipcode: string;
    taxrate?: number;
}