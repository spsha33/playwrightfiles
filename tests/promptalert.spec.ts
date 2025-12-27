import {test, expect, Locator} from "@playwright/test"

test("Confirm alert accept", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//Registering the dialog handler here dialod 
page.on("dialog",(dialog)=>{

console.log(" The type of alert : ", dialog.type());
expect(dialog.type()).toContain("prompt");

console.log(" The message in the dialog is:", dialog.message());
expect(dialog.message()).toBe("Please enter your name:");

// to capture the default vlaue in the alert and to verify
expect(dialog.defaultValue()).toContain("Harry");

// to fill the text- which is done only thru accept method
dialog.accept("Prathyu");
} )

const element = page.locator('#promptBtn');
await element.scrollIntoViewIfNeeded();
await element.click();
const meg:string= await page.locator("#demo").innerText();
// expect (meg).toContain("Prathyu");  -- working
expect (meg).toContain("Hello Prathyu! How are you today?");
await page.waitForTimeout(2000);

})

test("promt alert dismiss", async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
 page.on("dialog", (dialog)=>
      {
            expect(dialog.type()).toContain("prompt");
            expect(dialog.message()).toMatch(/name/i);

            // to capture the default vlaue in the alert and to verify
            expect(dialog.defaultValue()).toMatch(/HARRY/i);
            // no need to  fill anything for cancel
            dialog.dismiss();
      })
    const element = page.locator('#promptBtn');
await element.scrollIntoViewIfNeeded();
await element.click();
const meg:string= await page.locator("#demo").innerText();
// expect (meg).toContain("Prathyu");  -- working
expect (meg).toMatch(/USER cancelled the prompt./i);
await page.waitForTimeout(2000);
})