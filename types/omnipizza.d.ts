export type CountryCode = "MX" | "US" | "CH" | "JP";
export type Currency = "MXN" | "USD" | "CHF" | "JPY";
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
    fullName: string;
    phone: string;
    address: string;
    colonia?: string;
    zipCode: string;
    taxRate?: number;
}