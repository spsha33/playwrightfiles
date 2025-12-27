import {test,expect,Locator} from "@playwright/test"

test("Screen shot ", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const inputfield:Locator = page.locator("#datepicker");
    expect(inputfield).toHaveText("aefeaff")


// screen shot - locator specific we need to take screenshot from the locator instead of page

/*const timestamp=Date.now();  // timestamp for uniquely identifying the file
await inputfield.screenshot({path:"screenshots/inputfield"+timestamp+".png"});*/



})