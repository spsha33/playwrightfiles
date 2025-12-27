import {test,expect,Locator} from "@playwright/test"

test(" Hidden / Bootstrap dropdown", async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

//Login into the application

const usr:Locator= page.locator("input[name='username']");
const pwd:Locator= page.locator("input[name='password']");
await usr.fill("Admin");
await pwd.fill("admin123");
await page.getByRole("button").click();

// Click on the PIM option on the left side menu 
await page.getByText("PIM").click();

// we need to click on the down arrow , the tag is i and first we capture all the 4 elements ans select the required one

//await page.locator("form i").nth(2).click();

//or

const l:Locator= page.locator("form i");
await l.nth(2).click();
//get all the elements in the menu, since it is in the span tag we need to traverse from parent
await page.waitForTimeout(3000)
const allele:Locator=page.locator("div[role='listbox'] span");
const cnt:number=await allele.count();
console.log ( " COUNT IN MUENU: ", await allele.count());

// iterate  it is in span so both innertext and alltextcontents will work

console.log (" ------------------------- ALL TEXT CONTENTS -------------");
console.log (await allele.allTextContents());
const allelestring:string[]=await allele.allTextContents();

console.log (" ------------------------- INNER TEXT -------------");
for (let i=0;i<cnt;i++)
{
    console.log(await allele.nth(i).innerText());
}



console.log (" ------------------------- TEXT CONTENT-------------");
for (let i=0;i<cnt;i++)
{
    console.log(await allele.nth(i).textContent());
}


// Select an option from allTextContents which will return an array
for (let i=0;i<cnt;i++)
{
    const opts= await allele.nth(i).textContent();
    if(opts==="Account Assistant")
    {
        await allele.nth(i).click();
        break;
    }
}

await page.waitForTimeout(4000);

})