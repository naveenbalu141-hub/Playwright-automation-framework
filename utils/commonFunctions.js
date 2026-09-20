import { signUpLoginPage } from "../pages/signup/signUpLoginPage.js";
import {expect} from '@playwright/test';
import { customerDetailsPage } from '../pages/signup/customerDetailsPage.js';
export async function launchBrowser(page) {
      const signupsignpage = new signUpLoginPage(page);
      await signupsignpage.launchBrowser();
      await expect(page).toHaveURL('https://automationexercise.com/');
      await expect(signupsignpage.mainPage.fullFledgedHeading).toBeVisible();
    await signupsignpage.clickSignUpLoginButton();
    }
export async function deleteUser(page){
  const customerdetails = new customerDetailsPage(page);
  await expect(customerdetails.returnLoggedInAsText()).toHaveText('Logged in as Naveen');
  await customerdetails.clickDeleteBtn();
  await expect(customerdetails.returnaccountDeletedText()).toHaveText('Account Deleted!');
}