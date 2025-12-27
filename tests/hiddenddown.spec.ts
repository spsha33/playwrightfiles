import {test,expect,Locator} from "@playwright/test"
import { count } from "console";

test("Hidden Drop down", async({page})=>{

await page.goto("https://www.flipkart.com/");
const search:Locator=page.locator("input[name='q']");
await page.waitForTimeout(5000);
await search.fill("smart");
await page.waitForTimeout(5000);
const opt:Locator = page.locator("ul>li");

// count
const counts=await opt.count();
console.log(" TOTAL COUNT", counts);


//capturing nth option values

const val:string=await opt.nth(3).innerText();
console.log (" NTH VALUE IS :",val)


// printing option note: for of or for in loop is used only for arrays
console.log(" ================== ALL OPTIONS IN THE DROP DOWN ===================")
for(let i=0; i<counts;i++)
{// inner text will get the actual value
console.log(await opt.nth(i).innerText());
}

// select some value , shoes and click on it
for(let i=0; i<counts;i++)
{// inner text will get the actual value
const g=await opt.nth(i).innerText();
if(g==='shoes')
{
    opt.nth(i).click();
    break;
}

}
await page.waitForTimeout(9000);
console.log(await page.title());
})
