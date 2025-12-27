import {test,expect} from "@playwright/test"
import {OrangeHrmHomePage} from "../pages/OrangeHrmHomePage"
import {OrangeHrmLoginPage} from "../pages/OrangeHrmLoginPage"

test ("Automate Orange HRM, login and validate inner text", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//create objects of the classes required



const loginPage = new OrangeHrmLoginPage(page);
loginPage.Loginfunctionality("Admin","admin123");

const homePage = new OrangeHrmHomePage(page);
 await page.waitForTimeout(3000);
const count:number = await homePage.countElements();
// Vaidating the count
expect (count).toBe(12);

//validating the inner text
const label:string=await homePage.textDashboardLink();
expect (label).toBe("Dashboard");



})