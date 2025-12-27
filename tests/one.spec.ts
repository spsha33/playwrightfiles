import {test,expect} from "@playwright/test"

// to run the test - npx playwright test one.spec.ts  --project=chromium

test("Test to open the page", async ({page})=>
{
    await page.goto("https://www.selenium.dev/");
    await page.reload();
    let titl:string= await page.title();
    console.log("THE TITLE IS :",titl);
    await expect(page).toHaveTitle("Selenium");
}
)