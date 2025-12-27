import {test,expect,chromium} from "@playwright/test"

test("handling multiple tabs with single page fixture", async()=>{

// since we are not passing any fixture we need to create all Browser  -> Context -> Page
// TAB is also considered as page

const browser= await chromium.launch();  // creating browser
const context = await browser.newContext();  // creating context
const parentpage=await context.newPage(); // create page1  - tab1

// open the page and click so that it wil open in anoter tab
await parentpage.goto("https://testautomationpractice.blogspot.com/");
await expect(parentpage).toHaveTitle("Automation Testing Practice");
//await parentpage.locator("button:has-text('New Tab')").click();

//for child page -Now we need to handle an event which is click and also we need to make sure both the statmemts need
//to run simultaneosly not synchronus or asynchronus then we enclosed in promise and send as arguments
// page is enclosed [] as it need to avoid void which may be returned promise.all
const [childpage] =await Promise.all ([context.waitForEvent('page'),parentpage.locator("button:has-text('New Tab')").click()]);

// printing the details or assertion

//using context - best when we have more than 2 tabs
const pages= context.pages(); // returns page[]
 expect (pages.length).toBeGreaterThan(1);
await expect (pages[0]).toHaveTitle("Automation Testing Practice");
await expect (pages[1]).toHaveTitle("www.pavantestingtools.com");

// using the actual page variable - preferred when 2 tabs

await expect (parentpage).toHaveTitle("Automation Testing Practice");
await expect (childpage).toHaveTitle("www.pavantestingtools.com");

await parentpage.waitForTimeout(5000);


})