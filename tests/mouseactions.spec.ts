import {test,expect,Locator} from "@playwright/test"

test(" Mouse hover", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const button:Locator= page.locator(".dropbtn");
await button.hover();

//select the option in the menu - last child and validate it to be visible

const opt:Locator=page.locator(".dropdown-content a:last-child"); // or ".dropdown-content a:nth-child(2)
await opt.hover();
expect(opt).toBeVisible();
})

// Double click

test("Double click", async ({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");
const button:Locator= page.locator("button[ondblclick='myFunction1()']");
await button.scrollIntoViewIfNeeded();
await button.dblclick();
// capture the values for 2 fields and compare both are same
const secvalue:Locator = page.locator("#field2");
const val:string = await secvalue.innerText();
const firstvalue:string = await page.locator("#field1").innerText();

expect(val).toBe(firstvalue); // values as reference
expect(secvalue).toHaveValue('Hello World!'); //  locator as reference - but hard coded


})

test(" Drag and drop", async({page})=>{

await page.goto("https://jqueryui.com/droppable/");
const frame=page.frame({url:"https://jqueryui.com/resources/demos/droppable/default.html"});

// you need to handle null condition for frame
if(frame)
{
const drag= frame.locator("#draggable");
const drop=frame.locator("#droppable")
await (drag)?.dragTo(drop);
}
 // or use Frame locator

})

test.only (" Drag and drop Frame locator", async({page})=>{

await page.goto("https://jqueryui.com/droppable/");
const frame=page.frameLocator(".demo-frame");
const drag= frame.locator("#draggable");
const drop=frame.locator("#droppable")
await (drag).dragTo(drop);


})
