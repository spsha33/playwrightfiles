import {test, expect, Locator} from "@playwright/test"

test("Confirm alert", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//Registering the dialog handler here dialod 
page.on("dialog",(dialog)=>{

console.log(" The type of alert : ", dialog.type());
expect(dialog.type()).toContain("confirm");

console.log(" The message in the dialog is:", dialog.message());
expect(dialog.message()).toContain("Press");

dialog.dismiss();
} )

const element = page.locator('#confirmBtn');
//await element.scrollIntoViewIfNeeded();
await element.click();
const meg:string= await page.locator("#demo").innerText();
expect (meg).toContain("You pressed Cancel!");
await page.waitForTimeout(2000);

})