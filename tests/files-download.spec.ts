import {test , expect, Locator} from "@playwright/test"

test("Single file up", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//upload the file
const singlefilebut:Locator = page.locator("#singleFileInput");
await singlefilebut.setInputFiles("files/sampleasdasdadasda1.txt");

//click the button which will dislay the text and validate it 

await page.waitForTimeout(9000);
})