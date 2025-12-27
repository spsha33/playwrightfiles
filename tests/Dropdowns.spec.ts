import {test,expect,Locator} from "@playwright/test"

test.only("Single Drop down", async({page})=>{

await page.goto("https://www.salesforce.com/form/developer-signup/?d=pb");
 const dpdown:Locator= await page.locator("select[name='CompanyCountry']");
 await page.waitForTimeout(9000);
 //await page.waitForSelector('#CompanyCountry-0kyH');



 // By select option - Selenium - SelectByVisibleText

          //      await dpdown.selectOption("Angola");
const dpmenu:Locator= await page.locator("select[name='CompanyCountry']>option");
await page.waitForTimeout(5000);
console.log(await dpdown.count());
const det:string[]=await dpmenu.allTextContents();
console.log(det);
})