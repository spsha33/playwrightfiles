import {test,expect,Locator} from "@playwright/test"

test.only("Single Drop down with Select tag", async({page})=>{

/*await page.goto("https://www.salesforce.com/form/developer-signup/?d=pb");
 const dpdown:Locator= await page.locator("select[name='CompanyCountry']");
 //await page.waitForSelector('#CompanyCountry-0kyH');

 // 4 ways

 //1. By select option - Selenium - SelectByVisibleText

                await dpdown.selectOption("Angola");

// 2. Select by value attribute - Selenium selectByValue()

                await dpdown.selectOption({value:'AR'});

// 3. Select by label attribute - needs to have that attribute
                //await dpdown.selectOption({label:'AR'});

// 4. Select By index - SelectByIndex(3)
                await dpdown.selectOption({index:8});
await page.waitForTimeout(3000);*/

// Counting the elements in the array
// const frame = page.frameLocator('iframe');
//const countele:Locator= page.locator("select[id^='CompanyCountry']/option)");
//const countele:Locator = page.locator("//*[@id='CompanyCountry-0kyH']/option");

await page.goto("https://jqueryui.com/selectmenu/");
await page.waitForTimeout(7000);
console.log('Iframe count:', page.frames().length);
const frame = page.frameLocator('iframe');
const numberSelect = frame.locator('#number');
await numberSelect.selectOption('4');
//await frame.locator('#number').waitFor();
//const ele:Locator = page.locator("[id=number]");
//await ele.selectOption("4");
//await page.waitForSelector('[id=number]');
const eleloc: Locator = page.locator('[id=number] option');
 const c:number=await eleloc.count();
 console.log(" COUNT :  ",c);

//console.log(await countele.allTextContents());
//await expect(countele).toHaveCount(200);


// to check if the value exists in the dropdown

//const opttext:string[]=(await countele.allTextContents()).map(txt=>txt.trim());
//console.log(opttext);

})