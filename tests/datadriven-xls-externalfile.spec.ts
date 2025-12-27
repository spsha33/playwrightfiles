// CSV file data

import {test, expect,Locator} from "@playwright/test";
import fs from "fs";
import * as XLSX from 'xlsx'

// Reading xcel hierarchy file->workbook->sheet->rows/cols

const xcelpath="testdata/testd.xlsx"
const workbook=XLSX.readFile(xcelpath);
const sheetname=workbook.SheetNames[0];
const sheet=workbook.Sheets[sheetname];

// Conver the sheet into json file

const records:any[]=XLSX.utils.sheet_to_json(sheet);


                    //Actual test  usrname, pass, validity
test.describe("Functional", () => {
                    //  this is the logic
    for (const {usrname,pass,validity} of records ) {

        // Normalize values to handle undefined 
               const username = usrname ? usrname.trim() : "";
                const password = pass ? pass.trim() : "";
        test(`Login test for ${username} and ${password}`, async ({ page }) => {

            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            await page.getByPlaceholder("Username").fill(username);
            await page.getByPlaceholder("Password").fill(password);
            await page.locator(".oxd-button").click();
             await page.waitForTimeout(6000);
            if (validity.toLowerCase() === "valid") {
                await page.waitForTimeout(3000);
                await expect(page.locator(".oxd-main-menu li:first-child")).toBeVisible();
            }
            else if (username === "" && password === "") {
                //form[class="oxd-form"] >div:nth-child(2)>div span
                                    await expect(page.locator("form[class='oxd-form'] >div:nth-child(2)>div span")).toContainText(/Required/i);
            }
            else {
                       const alert = page.locator("div.oxd-alert p");
                await alert.waitFor({ state: "visible", timeout: 5000 });
                await expect(alert).toContainText(/Invalid/i);

                //await expect(page.locator("div.oxd-alert p")).toContainText(/Invalid/i);
            }

        })
    }

}) 