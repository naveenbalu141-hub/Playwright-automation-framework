import { MainPage } from '../mainpage/MainPage.js';

export class signUpLoginPage {
  constructor(page) {
    this.page = page;
    this.mainPage = new MainPage(page);

    this.signUpName = page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[2]');
    this.signUpEmail = page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]');
    this.signUpButton = page.getByRole('button', { name: 'Signup' });

    this.loginEmail = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]');
    this.loginPassword = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[3]');
    this.loginButton = page.getByRole('button', { name: 'Login' });

    this.newUserSignUpHeader = page.getByRole('heading', {
      name: 'New User Signup!'
    });
    this.loginToYourAccountHeader = page.locator('//*[@id="form"]/div/div/div[1]/div/h2');
    this.accountVerification = page.locator('//*[@id="form"]/div/div/div/div/h2/b');
      }

  async launchBrowser() {
    await this.page.goto('https://automationexercise.com');
  }

  async clickSignUpLoginButton() {
    await this.mainPage.signUpsignInButton.click();
  }

  async enterUserNameAndEmail(name, email) {
   await this.signUpName.fill(name);
    await this.signUpEmail.fill(email);
  }

  async clickSignUpButton() {
    await this.signUpButton.click();
  }

  getNewUserSignUpHeader() {
    return this.newUserSignUpHeader;
  }
  getaccountverification(){
    return this.accountVerification;
  }
  returnLoginToYourHeader(){
    return this.loginToYourAccountHeader;
  }
  async clickLogin(email,password){
    await this.loginEmail.fill(email);
    await this.loginPassword.fill(password);
    await this.loginButton.click();
  }
}