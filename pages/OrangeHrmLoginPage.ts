// the extension of this file will be ts only
// https://opensource-demo.orangehrmlive.com/web/index.php/auth/login -page
// class with encapsulation

//do notimport test as we dont have imlementation method in this page


import {Page,Locator} from "@playwright/test"

export class OrangeHrmLoginPage //You write export before a class so other files can use that class.
{
// declare variables as private and readonly for encapsulation purpose
private readonly page:Page; 
private readonly username:Locator;
private readonly password:Locator;
private readonly loginButton:Locator;

//constructor to intiate the locator with actual values

constructor(page:Page)
{
    this.page=page;
 
     this.username=page.getByPlaceholder("Username");
     this.password=page.getByPlaceholder("Password");
     this.loginButton=page.locator(".oxd-button ");
}


// Action methods all return promise so they are asyn, if return is void u can declare or not both r fine

async enterUsername(usrname:string): Promise<void> {
    console.log("ENTER ANME",usrname);
    await this.page.waitForTimeout(3000);
    await this.username.fill(usrname);
 }
async enterPassword(password:string) {
    
    await this.password.fill(password);
}

async clickLoginButton(): Promise<void> {
    
    await this.loginButton.click();
    
}
// combined method for all actions
async Loginfunctionality(usrname:string,password:string)
{ 
    await this.enterUsername(usrname);
    await this.enterPassword(password);
    await this.clickLoginButton();
}
}
