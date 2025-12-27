import {test,expect,Locator} from "@playwright/test"

test("Text box verification", async({page})=>{

await page.goto("https://login.salesforce.com/");
const emailtxt:Locator=page.locator("#username");
expect(emailtxt).toBeVisible;
expect(emailtxt).toBeEnabled;
await emailtxt.clear();
await emailtxt.fill("spsha4556@gmail.com");
// verifying the attribute value of the textbox
const un:String|null = await emailtxt.getAttribute("name");
expect(un).toBe("username"); // no need await as we are working on the returned value
let txt:string|null = await emailtxt.inputValue();
console.log("txt    ---  ",txt);
 expect (txt).toBe("spsha4556@gmail.com");

await page.waitForTimeout(3000);
})