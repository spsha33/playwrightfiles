import {test,expect,Locator,Page} from "@playwright/test"
async function selectDate(targetYear:string,targetMonth:string,targetDay:string,page:Page,isFuture:boolean) 
{// traverse till month and year matches
    while(true) 
    {
    const currentMonth:string|null =await page.locator(".ui-datepicker-month").innerText();
    const currentYear:string|null =await page.locator(".ui-datepicker-year").innerText();

        if(targetMonth===currentMonth && targetYear===currentYear)
        {
            break;
        }
         // click next or previous buttom based on isFuture
        if(isFuture===true)
        {
            await page.locator(".ui-datepicker-next").click();
        }
        else
        {
            await page.locator(".ui-datepicker-prev").click();
        }
    } 
    const alldays:Locator[]=await page.locator(".ui-datepicker-calendar td").all(); // all date locators
            for(let date of alldays)
            {
                const curday:string = await date.innerText();
                if (curday===targetDay)
                    await date.click();
            }

 
}
test(" Future and past date picker", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const dt:Locator= page.locator("#datepicker"); // it is an input box 
await dt.click(); // opens date picker

const year:string="2021";
const month:string="April"
const date:string="30";

await selectDate(year,month,date,page,false); // calling the function mention await as we declared selectdate as async
const expectedres="04/30/2021";
//await page.waitForTimeout(5000);
const actualres=await dt.inputValue();

console.log("Actual:",actualres)
    console.log("expected =========== expected : ",expectedres);
//expect (actualres).toBe(expectedres);

})