/**
 * Homework - nevalidní heslo
 */
import {myName, myEmail} from '../fixtures.js'

describe('Nevalidní Heslo', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('Test nevalidní heslo', async () => {
        const nameField = await $('#name');
        await expect(nameField).toBeDisplayed();
        await expect(nameField).toBeEnabled();
        await nameField.setValue(myName);
        
        const emailField = await $('#email'); // awaited once, used result on twice
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();
        await emailField.setValue(myEmail);
        
        const passwordField = await $('#password')
        await expect(passwordField).toBeDisplayed();
        await expect(passwordField).toBeEnabled();
        await passwordField.setValue("12345");

        const passwordConfirmField = await $('#password-confirm')
        await expect(passwordConfirmField).toBeDisplayed();
        await expect(passwordConfirmField).toBeEnabled();
        await passwordConfirmField.setValue("12345");

        const button = await $('.btn.btn-primary');
        await expect(button).toBeDisplayed();
        await expect(button).toBeEnabled();
        await expect(button).toHaveText('Zaregistrovat');
        await button.click();
        
        const newPasswordField = await $('#password');
        await expect(newPasswordField).toBeDisplayed();
        await expect(newPasswordField).toHaveElementClass('is-invalid');

        const feedback = await $('.invalid-feedback');
        await expect(feedback).toBeDisplayed();
        await expect(feedback).toHaveText('Heslo musí obsahovat minimálně 6 znaků, velké i malé písmeno a číslici');

        await browser.pause(1000);
        await browser.saveScreenshot('03-nevalidni-heslo.png');
    });

});
