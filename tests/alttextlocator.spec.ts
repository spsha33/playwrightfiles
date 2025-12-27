import {test,expect} from "@playwright/test"
import {Locator} from "@playwright/test"

test("Alt txt locator",async ({page})=>{

await page.goto("https://www.selenium.dev/documentation/grid/applicability/");
await page.getByAltText("Sauce Labs").click();


}
)

// 2nd test to see if the locator is visible - no promise import Locator fixture

test("to check the visibility only", async ({page})=> {
    await page.goto("https://www.selenium.dev/documentation/grid/applicability/");

let loc:Locator = await page.getByAltText("Sauce Labs");
expect(loc).toBeDisabled;


})

