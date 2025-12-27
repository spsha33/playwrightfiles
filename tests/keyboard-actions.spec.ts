import { test, expect, Locator} from "@playwright/test"
test(" Keyboard actions on form", async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");

    // focus on first element 
    const input1:Locator= page.locator("#input1");
    await input1.focus(); // or await input1().click();

    // add text into the input1 text box
    await page.keyboard.insertText("Prathyu");

    //ctl+A to copy the text from inpu1  or 1 statement await page.keyboard.press('Control+A');
    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');

    //Copy the text
    //await page.keyboard.down('Control');
    await page.keyboard.press('Control+C');
    //await page.keyboard.up('Control');

    //Navigate oto the next text box - pressing tabe 2 times
    await page.keyboard.press('Tab'); // or Contrl and up
    await page.keyboard.press('Tab'); // contrl and down

    //Ctlr V
    await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');

await page.waitForTimeout(3000);
})