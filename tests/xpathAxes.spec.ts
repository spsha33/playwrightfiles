import {test,expect,Locator} from "@playwright/test"

/*test(" Self xpath", async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp");
const selfnode:Locator = page.locator("//td[text()='Germany']//self::td");
await expect(selfnode).toBeVisible;
await expect(selfnode).toHaveText("Germany");

})*/

/*test(" Parent xpath", async({page})=>{


await page.goto("https://www.w3schools.com/html/html_tables.asp");
const parentnode:Locator = page.locator("//td[text()='Germany']//parent::tr");
await expect(parentnode).toBeVisible;
const rowtext:string= await parentnode.textContent() as string;
console.log("The row text is :",rowtext);
await expect(parentnode).toHaveText(/Germany/); 
})*/

test("Count Children", async({page})=>{

await page.goto("https://www.w3schools.com/html/html_tables.asp");
const childrow:Locator = page.locator("//table[@id='customers']//tr[3]//child::td");
console.log("Count is",await childrow.count());
expect (childrow).toHaveCount(3);

})