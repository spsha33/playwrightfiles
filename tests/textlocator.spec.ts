import {test,expect} from "@playwright/test"
import {Locator} from "@playwright/test"

test("Alt txt locator",async ({page})=>{

await page.goto("https://www.selenium.dev/documentation/grid/applicability/");
 let txtt:Locator=page.getByText("Development Partners");
await expect(txtt).toBeDisabled;
}
)



