import {test,expect} from "@playwright/test"

// as we are passing browser no need to import browser and it will use the config one and need to create context  and page
test("pop-up",async({browser})=>{

    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");

    // now we need to click on the button and at the same time we need to handle the popup
    //so use promise.all([])
     await Promise.all([page.waitForEvent('popup'),await page.locator("#PopUp").click()]);

    // capture the pages in the variable all the pages belong to the same context
    //parent page will always be 0 index
     const allwind=context.pages(); // returns array of pages and we can use any for loop
    console.log(" Totoal windows", allwind.length);
    console.log(" 1st window ", allwind[0].url());
    console.log(` 2nd window  ${allwind[1].url()}`);
    //console.log(" 3rd window ",allwind[2].url());

    // now we can do action on the popup windows. Ex if the window is playscript then close the window
    for(let wind of allwind)
   {
        const tit:string=await wind.title();
        console.log(" Page tit ", tit);
        if (tit.includes("sel"))
        { // add actions
            wind.close();
            await page.waitForTimeout(9000);
        }
   }
})