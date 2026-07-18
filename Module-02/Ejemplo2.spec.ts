import { test, expect } from "@playwright/test";

const USERNAME = process.env.TEST_USER_USERNAME ?? "standard_user";
const PASSWORD = process.env.TEST_USER_PASSWORD ?? "pizza123";

//Arrow function o funcion anonima
test.describe("Smoke with locators (M02)", () => {
  //Page es un fixture
  test("TC_001 - Succesfull login using valid credentials", async ({page}) => {
    //Arrage
    await page.goto("/");
    //Act
    await page.getByTestId("username-desktop").fill(USERNAME);

    const HeadTwo = await page.getByRole("heading", {name: "Welcome back!", level: 2}).textContent();
    console.log(HeadTwo);

    await page.getByTestId("password-desktop").fill(PASSWORD);
    await page.getByRole("img", {name: "SA flag"}).click;
    //await page.getByRole("button", {name: "Sign In"}).click;
    await page.getByRole("button", {name: /sign in/i}).click;
    //await page.getByTestId("login-button-desktop").click();
    //Asert
    //await expect(page).toHaveURL("/catalog");
    //await expect(page).toHaveURL(/\/catalog/);
  });
});