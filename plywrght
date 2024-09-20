package Playwright.Practice;

import Playwright.HomeBasePL;
import Playwright.Pages.FormAuthPagePL;
import Playwright.Pages.HomePagePL;
import org.testng.Assert;
import org.testng.annotations.Test;
import utilities.BrowserUtils;

public class FormAuthPL extends HomeBasePL {
    FormAuthPagePL fa=new FormAuthPagePL();
    HomePagePL hm=new HomePagePL();
    @Test
    public void formLogin(){
        page.click(hm.formAuth);
        page.locator(fa.userName).fill("tomsmith");
        page.locator(fa.password).fill("SuperSecretPassword");
        BrowserUtils.sleep(2);
        page.click(fa.loginButton);
        String message = page.querySelector(fa.message).textContent();
        System.out.println("message = " + message);
        Assert.assertEquals(message.replace("×","").trim(),"You logged into a secure area!");
    }
}
