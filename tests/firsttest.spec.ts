
// first for every test case or test we need to import function test - for test cases, expect - assertion
// these will be import frem node-modules ->playwright -> test

import {test,expect} from "@playwright/test"

// test is the annotation for the test and good practice to write one assertion only in one test 
//as if 1 assertion failes,we cant even test other
// 2 paramerter, 1st is the tiltle and the second is the function

//Syntax:

/* test("This is title",()=>{


steps
}
) */

// -------------------  Sample test  ---------------------------
// we need to send predefined fixtures(global variable accessible across every)
// page - use for doing any operation on the web page, browser
// {} - use to wrap the picture to use the value send in the fixture
// all the asynchronous steps will return promise , we need to add await for asynchronous 
// console.log - is synchronus wherese any thing runnin gin the background or dealing with external
//file are asynchronous in nature so we need to add await statement for each Ex: open a file
// db connection, all the web page related action- promise is a confirmation from the task
//asynchronus, if we hover on the methods we can see the method have promise or not
// promise resolved - background success, promise reject -> background fail

test("Verify page title ",async ({page})=>  // need to add async for function with await
{

    await page.goto("https://www.selenium.dev/")  // add await for every function with promise task 

    let tit:string= await page.title()

    console.log("title is:", tit) // no need await as it is sunchronous and no promise

    // since we have 3 browser int the config file every test method will run on all
// if we dont specify anything by default 3 browser
// Assert - expect function

await expect(page).toHaveTitle("Selenium")

})
