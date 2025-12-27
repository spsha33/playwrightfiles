import { test,expect,Locator} from "@playwright/test"

test("Dynamic webtable", async({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/");

 const rows:Locator = page.locator("#taskTable tbody");
 expect(rows).toBeVisible();
 
 //get individual rows locators
 const allrowsloc:Locator[]=await rows.locator("tr").all();
 let cpudata:string="";

 for(let row of allrowsloc)
 {
    const processname:string = await row.locator("td").nth(0).innerText();
    if(processname === "Chrome")
    {
       // const cpudata:string= await row.locator('td:has-text("%")').innerText(); // CSS
         cpudata= await row.locator('td',{hasText:'%'}).innerText(); // playwright syntax
        
        console.log(" CPU TIE", cpudata);
    }
 }

  const disp:Locator = page.locator(".display-values p .chrome-cpu");
  const cval:string=await disp.innerText();
  expect(cval).toBe(cpudata);  // assertion to check both the values are same





})