import {test, expect} from '@playwright/test'

//Si solo se desea importar un aarchio
//import { } from "../types/omnipizza.js";

//Si se desean importar mas archivos se deben indexar en la carpeta de types, agregando el archivo index
import {Market, User, Currency} from "../types/";

import marketJson from "../data/markets.json" with { type: "json"};
import usersJson from "../data/users.json" with { type: "json"};

const markets = marketJson as Market[];
const users = usersJson as User[];

const standardUser = users.find((user) => user.username === "standard_user");
//Patron Guard Clause
if (!standardUser){
    throw new Error("data/users.json doesn't contain a user with username 'standard_user'. Check the data seed before running");
}

//Si se quisieran usar todos se quita el partial, caso contrario se coloca y se especifica cuales se usara
const currencySymbol: Partial<Record<Currency, string>> = {
    MXN: "$",
    JYP: "￥"
}

test.describe("Smoke parametrized by market", () => {
    for(const market of markets){
        test(`TC-${market.code} - login + catalog in market ${market.code}`, async ({ page }) => {
            //Arrange
            await page.goto("/");

            //Act
            await page.getByTestId("username-desktop").fill(standardUser.username);
            await page.getByTestId("password-desktop").fill(standardUser.password);
            await page.getByTestId(`market-${market.code}`).click();
            await page.getByTestId("login-button-desktop").click();

            //Assert
            await expect(page).toHaveURL(/\/catalog/);
            const symbol = currencySymbol[market.currency];

            //Patron Fast Return
            if(!symbol) return;

            await expect(page.locator("body")).toContainText(symbol);
            
        });
    }
});