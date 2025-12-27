// 
//Orange HRM Home page
import {test,Page,Locator} from "@playwright/test"

export class OrangeHrmHomePage{

//variable declaration

private readonly list:Locator;
private readonly dashboard:Locator;

//constrcutor

constructor(page:Page)
{
    this.list= page.locator("ul.oxd-main-menu li");
    this.dashboard = page.locator("h6.oxd-text");
}

// methods

async countElements():Promise<number>

{
 
    await this.list.first().waitFor({state:"visible"});
    return await this.list.count() ;
}

async textDashboardLink():Promise<string>
{
     return await this.dashboard.innerText();
     
}

}

