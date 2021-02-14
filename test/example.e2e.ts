import { LoginPage } from './pageobjects/login.page';
import { SecurePage } from './pageobjects/secure.page';

import { } from "expect-webdriverio";

describe('My Login application', () => {
  it('should login with valid credentials', () => {

    let loginPage = new LoginPage();
    loginPage.open();
    browser.maximizeWindow();

    loginPage.login('tomsmith', 'SuperSecretPassword!');

    let securePage = new SecurePage();
    expect(securePage.flashAlert).toBeExisting();
    expect(securePage.flashAlert).toHaveTextContaining(
      'You logged into a secure area!');
  });
});
