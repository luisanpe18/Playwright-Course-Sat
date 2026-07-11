import { test, expect } from "@playwright/test";

const USERNAME = process.env.TEST_USER_USERNAME ?? "standard_user";
const PASSWORD = process.env.TEST_USER_PASSWORD ?? "pizza123";

//Arrow function o funcion anonima
test.describe("Smoke Omnipizza (M01)", () => {
  //Page es un fixture
  test("TC_001 - Succesfull login using valid credentials", async ({page}) => {
    //Arrage
    await page.goto("/");
    //Act
    await page.getByTestId("username-desktop").fill(USERNAME);
    await page.getByTestId("password-desktop").fill(PASSWORD);
    await page.getByTestId("login-button-desktop").click();
    //Asert
    //await expect(page).toHaveURL("/catalog");
    await expect(page).toHaveURL(/\/catalog/);
  });

  test("TC_002 - Catalog shows at least 1 pizza", async ({ page }) => {
    //Arrage
    await page.goto("/");
    
    //Act
    await page.getByTestId("username-desktop").fill(USERNAME);
    await page.getByTestId("password-desktop").fill(PASSWORD);
    await page.getByTestId("market-MX").click();
    await page.getByTestId("login-button-desktop").click();
    
    //Asert
    //await expect(page).toHaveURL("/catalog");
    //await expect(page).toHaveURL(/\/catalog/);
    const pizzaCards = page.locator("[data-testid^='pizza-card-']");//Esta constante guarda todo lo que encuentra en el DOM
    await expect(pizzaCards.first()).toBeVisible({timeout: 30000});//Valida que el primer resultado de la constante exista
    const count = await pizzaCards.count();//Aqui almacenamos en una constante el numero total de elementos que se almacenaron en pizzacards
    //console.log(count);
    await expect(count).toBeGreaterThan(0); //<1
    expect(count).toBeGreaterThanOrEqual(1); //>=1
  });
});
