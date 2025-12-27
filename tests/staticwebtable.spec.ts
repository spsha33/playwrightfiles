import {test, expect, Locator} from "@playwright/test"

test(" Static web table operations", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const table:Locator = page.locator("table[name='BookTable']");

//   count the number of rows in the table

// const rows:Locator = page.locator("table[name='BookTable'] tr"); // working
// we can also use locator chaining we we refer the previous locator

const rows:Locator = table.locator("tr");
console.log(" ROWS COUNT        ", await rows.count());


// Count the number of rows

//const col:Locator= page.locator("table[name='BookTable'] tr th");

const col:Locator= rows.locator("th");
console.log(" COLUMN COUNT        ", await col.count());


// Read the values from any particular rows say 3

const rdata:Locator=rows.nth(2).locator("td"); // returns locator
console.log(await rdata.allInnerTexts());

//validate to have the text
expect(rdata).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);

// printing the data........since it is not an array only locators we use traditional for loop
const count=await rdata.count();
for(let i=0;i<count;i++)
{
    console.log( await rdata.nth(i).innerText());
}


//Count the number of books written by Amit in the entire table
// first read all the data from the table - all return locator array - when any match found we push the value in another array

const allrowsarray:Locator[] = await rows.all();
const amitbooks:string[]=[];
//since we have array now use  for of loop
for(let loc of  allrowsarray.slice(1))  //slice excludes header
{
    const rowdet:string[]= await loc.locator("td").allInnerTexts();
    if(rowdet[1]==="Amit")
    {
        amitbooks.push(rowdet[0]);
    }

}
console.log(" The total no of books : ",amitbooks.length );
console.log(" Books Details ");
for(let j=0;j<amitbooks.length;j++)
    console.log(amitbooks[j]);


  //5.	Total price of all books

 let totprice:number =0;
  for(let locd of  allrowsarray.slice(1))  //slice excludes header
 { 
    const rowdet:string[]= await locd.locator("td").allInnerTexts();
    let price:number= parseInt(rowdet[3]);
    totprice=totprice+price;
    
 }
expect(totprice).toBeGreaterThanOrEqual(2000);//assertion
   console.log("TOTAL PRICE  ", totprice);  
  
})