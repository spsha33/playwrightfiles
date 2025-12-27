import {test, expect, Locator} from "@playwright/test"

test("Simple alert", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//Registering the dialog handler here dialod 
page.on("dialog",(dialog)=>{

console.log(" The type of alert : ", dialog.type());
expect(dialog.type()).toContain("alert");

console.log(" The message in the dialog is:", dialog.message());
expect(dialog.message()).toContain("alert");

dialog.accept();
} )

const element = page.locator('#alertBtn');
//await element.scrollIntoViewIfNeeded();
await element.click();
await page.waitForTimeout(5000);

})