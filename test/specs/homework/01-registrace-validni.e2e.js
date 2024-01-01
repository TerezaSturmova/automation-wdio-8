/**
 * Homework - validni registrace
 */
import { myName, adminEmail, myPassword, getRandomEmail } from '../fixtures.js'

describe('Validni Registrace', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('Validni  Registrace', async () => {
        //console.log(username)
        //console.log(getRandomEmail())
        const nameField = await $('#name');
        await expect(nameField).toBeDisplayed();
        await expect(nameField).toBeEnabled();
        await nameField.setValue(myName);


        const emailField = await $('#email'); // awaited once, used result on twice
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();
        await emailField.setValue(getRandomEmail());

        const passwordField = await $('#password')
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();
        await passwordField.setValue(myPassword);

        const passwordConfirmField = await $('#password-confirm')
        await expect(passwordConfirmField).toBeDisplayed();
        await expect(passwordConfirmField).toBeEnabled();
        await passwordConfirmField.setValue(myPassword);

        const button = await $('.btn.btn-primary');
        await expect(button).toBeDisplayed();
        await expect(button).toBeEnabled();
        await expect(button).toHaveText('Zaregistrovat');
        await button.click();


        const userMenu = await $('.navbar-right');
        const loginText = await userMenu.$('span');
        await expect(loginText).toHaveText('Přihlášen');


        const displayName = await userMenu.$('strong');
        await expect(displayName).toHaveText(myName);

        await browser.pause(1000);
        await browser.saveScreenshot('01-validni-registrace.png');
    });

});
