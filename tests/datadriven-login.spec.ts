import {test,expect,Locator} from "@playwright/test"
// test data
const logindetails: string[][] = [
    ['spdfjp', 'admin123', 'Invalid'],
    ['Admin', 'admin123', 'valid'],
    ['Admin', 'safsf', 'Invalid'],
    ["", "", "Invalid"]
]
// we are keeping in the group usinf describe block
test.describe("Functional", () => {
//  this is the logic
    for (let [usrname, pass, validity] of logindetails) {
        test(`Login test for ${usrname} and ${pass}`, async ({ page }) => {

            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            await page.getByPlaceholder("Username").fill(usrname);
            await page.getByPlaceholder("Password").fill(pass);
            await page.locator(".oxd-button").click();
            if (validity.toLowerCase() === "valid") {
                await expect(page.locator(".oxd-main-menu li:first-child")).toBeVisible();
            }
            else if (usrname === "" && pass === "") {
                //form[class="oxd-form"] >div:nth-child(2)>div span

                await expect(page.locator("form[class='oxd-form'] >div:nth-child(2)>div span")).toContainText(/Required/i);
            }
            else {
                await page.waitForTimeout(3000);
                await expect(page.locator("div.oxd-alert p")).toContainText("Invalid ");
            }

        })
    }

})




