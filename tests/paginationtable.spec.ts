import {test, expect, Locator} from "@playwright/test"

test("Pagination table validation", async({page})=>{

     await page.goto("https://testautomationpractice.blogspot.com/");
     const table:Locator = page.locator("#productTable tbody");
     let havemorepages=true;
     let i:number=1;

     while(i<=4)
     { console.log(" Page ",i);
        const rowdata:Locator[]= await table.locator("tr").all();
        for( let r of rowdata)
        {
            console.log(await r.innerText());
        
        }
        i++;
        // now we are checking if the next button is enabled still, if yes click next or make morepages as false to exit
        // in the above page we dont have next button so just going by number for 2 pages only
        //clicking on the 2 page button
        if(i===5)
            break;
        //const secondpage:Locator= page.locator("#pagination li:has(a.active) + li a"); // CSS or below
        const secondpage:Locator= page.locator(`#pagination li:nth-child(${i}) a`);
        await secondpage.click();
         await page.waitForTimeout(5000);
        }
})