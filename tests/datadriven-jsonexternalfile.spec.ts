// json file data

import {test, expect,Locator} from "@playwright/test";
import fs from "fs";
                    // Reading data from json file
const jsonpath= "testdata/logintestdata.json";
const logindet:any=JSON.parse(fs.readFileSync(jsonpath,"utf-8"));
                    //Actual test
test.describe("Functional", () => {
                    //  this is the logic
    for (const {usrname, pass, validity} of logindet) {
        console.log(`${usrname} and ${pass}`);
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