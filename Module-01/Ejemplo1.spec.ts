import {test, expect} from '@playwright/test';

const USERNAME = process.env.TEST_USER_USERNAME ?? "standard_user";
const PASSWORD = process.env.TEST_USER_PASSWORD ?? "pizza123";

//Arrow function o funcion anonima
test.describe("Smoke Omnipizza (M01)", () => {
    //Page es un fixture
    test("TC_001 - Succesfull login using valid credentials", async({page}) => {
        //Arrage
        await page.goto("/");
        //Act
        await page.getByTestId("username-desktop").fill(USERNAME);
        await page.getByTestId("password-desktop").fill(PASSWORD);
        await page.getByTestId("login-button-desktop").click();

        //Asert
        //await expect(page).toHaveURL("/catalog");
        await expect(page).toHaveURL(/\/catalog/);
    })
});