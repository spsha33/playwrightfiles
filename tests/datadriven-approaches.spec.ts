// parametrization or Data Driven testing

import {test,expect,Locator} from "@playwright/test"

// test data
const searchitem:string[]=["samsung","Lg","pesarapappu","table"];

// Approach 1 repeating the test for all the input values
/*
for( let item of searchitem)
{

test(`Searching item ${item}`, async({page})=>{
await page.goto("https://www.flipkart.com/");
//const input:Locator = page.locator("[type=text]"); or
const input:Locator = page.getByPlaceholder('Search for Products, Brands and More');
await input.click();
await input.fill(item);
await page.locator("button[title='Search for Products, Brands and More']").click();
const res:Locator=page.locator("._Omnvo");
expect (await res.innerText()).toContain(item);
})

}*/

// Approach 2 for each item functions
/*
searchitem.forEach((item)=>{
test(`Searching item ${item}`, async({page})=>{
await page.goto("https://www.flipkart.com/");
//const input:Locator = page.locator("[type=text]"); or
const input:Locator = page.getByPlaceholder('Search for Products, Brands and More');
await input.click();
await input.fill(item);
await page.locator("button[title='Search for Products, Brands and More']").click();
const res:Locator=page.locator("._Omnvo");
expect (await res.innerText()).toContain(item);
})

})  */

// Approach 3 with describe block

test.describe("Search with describe", async () => {
    searchitem.forEach((item) => {
        test(`Searching item ${item}`, async ({ page }) => {
            await page.goto("https://www.flipkart.com/");
            //const input:Locator = page.locator("[type=text]"); or
            const input: Locator = page.getByPlaceholder('Search for Products, Brands and More');
            await input.click();
            await input.fill(item);
            await page.locator("button[title='Search for Products, Brands and More']").click();
            const res: Locator = page.locator("._Omnvo");
            expect(await res.innerText()).toContain(item);
        })

    })

})