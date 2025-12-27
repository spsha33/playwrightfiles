import {test,expect,Locator} from "@playwright/test"

test("Direct input datepicker", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    const inputfield:Locator = page.locator("#datepicker");

    //fill the value as per format
    inputfield.fill("11/12/2025");

    await page.waitForTimeout(3000);
})