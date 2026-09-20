import { MainPage } from "../mainpage/MainPage";
export class customerDetailsPage{
    constructor(page){
        this.page = page;
        this.MainPage = new MainPage(page);
        this.password = page.locator('#password');
        this.dobDay = page.locator('#days');
        this.dobMonth = page.locator('#months');
        this.dobYear = page.locator('#years');
        this.newsLetter = page.locator('#newsletter');
        this.specialOffers = page.locator('#optin');
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.address1 = page.locator('#address1');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode');
        this.pincode = page.locator('#pincode');
        this.mobilenumber = page.locator('#mobile_number');
        this.createAccount = page.getByRole('button',{name:'Create Account'});
        this.accountCreated = page.locator('//*[@id="form"]/div/div/div/h2/b');
        this.continueBtn = page.locator('//*[@id="form"]/div/div/div/div/a');
        this.loggedInAs = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a');    }
//Math.random().toString(36).substring(2, 8)
    async enterPassword(password){
        await this.password.fill(password);
    }
    async enterDOB(){
        await this.dobDay.selectOption('1');
        await this.dobMonth.selectOption({label:'October'});
        await this.dobYear.selectOption({index:21});
    }
    async clickSpecialOffersAndNewsLetter(){
        await this.newsLetter.click();
        await this.specialOffers.click();
    }
    async fillAddressDetails(fname,lname){
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.country.selectOption('India');
        await this.state.fill('TN');
        await this.address1.fill('Siruseri');
        await this.city.fill('Chennai');
        await this.zipcode.fill('123');
        await this.mobilenumber.fill('1234567');
    }
    async clickCreateAccountBtn(){
        await this.createAccount.click();
    }
     getAccountCreatedText(){
         return this.accountCreated;
    }
    async clickContinueBtn(){
        await this.continueBtn.click();
    }
    returnLoggedInAsText(){
        return this.loggedInAs;
    }
    async clickDeleteBtn(){
        await this.MainPage.deleteAccountBtn.click();
    }
    returnaccountDeletedText(){
        return this.MainPage.accountDeletedText;
    }
}