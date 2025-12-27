import {test , expect, Locator} from "@playwright/test"

test("Single file upload", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//upload the file
const singlefilebut:Locator = page.locator("#singleFileInput");
await singlefilebut.setInputFiles("files/sample1.txt");

//click the button which will dislay the text and validate it 

await page.locator("button:has-text('Upload Single File')").click();
const msg:string|null=await page.locator("#singleFileStatus").textContent();
expect (msg).toContain("sample1.txt");
})

test("Multiple files upload", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

//upload the file
const singlefilebut:Locator = page.locator("#multipleFilesInput");
await singlefilebut.setInputFiles(["files/sample1.txt","files/sample2.txt"]);

//click the button which will dislay the text and validate it 

await page.locator("button:has-text('Upload Multiple Files')").click();
const msg:string|null=await page.locator("#multipleFileStatus").textContent();
expect (msg).toContain("sample1.txt");
expect (msg).toContain("sample2.txt");
})