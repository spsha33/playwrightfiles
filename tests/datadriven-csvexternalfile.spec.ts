// CSV file data

import {test, expect,Locator} from "@playwright/test";
import fs from "fs";
import {parse} from "csv-parse/sync"

                    // Reading data from CSV file
const csvpath= "testdata/td.csv";
const fileContent:any=fs.readFileSync(csvpath,"utf-8");  // gets the entire content and we nned to parse
// make sure to add any for records as parse will return unknown[]
const records:any= parse(fileContent,
                                 {
                                    columns:true,
                                 skip_empty_lines:true
                                 }
                    )


                    //Actual test  usrname, pass, validity
test.describe("Functional", () => {
                    //  this is the logic
    for (const row of records ) {
         console.log(row.usrname, row.pass, row.validity);
        test(`Login test for ${row.usrname} and ${row.pass}`, async ({ page }) => {

            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            await page.getByPlaceholder("Username").fill(row.usrname);
            await page.getByPlaceholder("Password").fill(row.pass);
            await page.locator(".oxd-button").click();
            if (row.validity.toLowerCase() === "valid") {
                await page.waitForTimeout(3000);
                await expect(page.locator(".oxd-main-menu li:first-child")).toBeVisible();
            }
            else if (row.usrname === "" && row.pass === "") {
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