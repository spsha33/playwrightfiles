import {test,expect,chromium} from "@playwright/test"

test("Creating multiple tabs - browser context ", async()=>{

// since we are not passing any fixture we need to create all Browser  -> Context -> Page

const browser= await chromium.launch();  // creating browser
const context = await browser.newContext();  // creating context
const page1=await context.newPage(); // create page1  - tab1
const page2=await context.newPage();  // create page2  - tab2 opens in another tab

await page1.goto("https://www.selenium.dev");
await expect(page1).toHaveTitle("Selenium");
await page1.waitForTimeout(5000);

await page2.goto("https://testautomationpractice.blogspot.com/");
await expect(page2).toHaveTitle("Automation Testing Practice");
await page2.waitForTimeout(5000);


})