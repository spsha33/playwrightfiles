import {test, expect,Locator} from "@playwright/test"

test.only("Simple frame", async({page})=>{

await page.goto("https://jqueryui.com/button/");
console.log(page.frames().length);

const frame= page.frame({url: "https://jqueryui.com/resources/demos/button/default.html"});

if(frame)
{  console.log(" CHILD FRMS", frame.childFrames().length);
       await frame.locator("input[value='A submit button'][role='button']").click();
}
})

// Using frame locator - we can use any locator to use , where as in frame onlu url or name
test("Frame Locator", async({page})=>{

await page.goto("https://jqueryui.com/button/");
console.log(page.frames().length);

const frame= await page.frameLocator(".demo-frame").locator("input[value='A submit button'][role='button']");

await frame.click();

})
