import {test,expect,Locator} from "@playwright/test"

test("Radio and Checkbox same", async({page})=>{

await page.goto("https://login.salesforce.com/");
const box:Locator = page.getByRole("checkbox");
await expect(box).toBeVisible();

// check if it is checked  by default
expect(await box.isChecked()).toBe(false); // await in front of ischecked as it returns promise
// not infront of expect as it is dealing with value not web element

await box.check();
expect(box).toBeChecked();
await box.uncheck();
expect(box).not.toBeChecked(); // negation use not before the assertion


})