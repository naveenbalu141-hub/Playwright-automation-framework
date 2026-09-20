export class MainPage {
  constructor(page) {
    this.page = page;

    this.homeButton = page.getByRole('link', { name: 'Home' });
    this.productsButton = page.getByRole('link', { name: 'Products' });
    this.cartButton = page.getByRole('link', { name: 'Cart' });
    this.signUpsignInButton = page.getByRole('link', { name: 'Signup / Login' });
    this.testCasesButton = page.getByRole('link', { name: 'Test Cases' });
    this.apiTestingButton = page.getByRole('link', { name: 'API Testing' });
    this.videoTutorialsButton = page.getByRole('link', { name: 'Video Tutorials' });
    this.contactUsButton = page.getByRole('link', { name: 'Contact us' });
    this.deleteAccountBtn = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');
    this.accountDeletedText = page.locator('//*[@id="form"]/div/div/div/h2/b');
    this.fullFledgedHeading = page.getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers'
    });
  }
}