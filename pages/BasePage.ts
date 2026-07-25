import { Page, Locator } from "@playwright/test";

//Clase = modelo
export class BasePage{
    
    //Constructor explicito
    constructor(protected readonly page: Page){}

    //Método = accion
    protected test_ID(base: string): Locator{
        const size = this.page.viewportSize();
        const suffix = size && size.width < 768 ? "-responsive" : "-desktop";
        return this.page.getByTestId(`${base}${suffix}`).or(this.page.getByTestId(base)).first();
    }

    protected async waitForUrl(pattern : RegExp, timeout = 15_000) : Promise<void> {
        await this.page.waitForURL(pattern, {timeout});
    }

    public async screenshot(screen: string): Promise<void>{
        await this.page.screenshot({path: `test-results/${screen}.png`})
    }

}