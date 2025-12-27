import {test,expect,Locator} from "@playwright/test"

test("Text box verification", async({page})=>{

await page.goto("https://login.salesforce.com/");
const emailtxt:Locator=page.locator("#Login");
expect (await emailtxt.screenshot()).toMatchSnapshot("Element.png");
})