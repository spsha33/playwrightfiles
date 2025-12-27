import {test,expect,Locator} from "@playwright/test"

test("Visual testing - Webpages", async({page})=>{


// first time comapring without any screen shots , when it run a new file is automatically created
await page.goto("https://www.pavanonlinetrainings.com/p/udemy-courses.html");
expect(await page.screenshot()).toMatchSnapshot("first.png");

//await expect(page).toHaveScreenshot();



})