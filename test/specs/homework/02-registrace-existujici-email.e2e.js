/**
 * Homework - existujici email
 */
import { myName, adminEmail, myPassword } from '../fixtures.js'

describe('Existujici Email', async () => {

    beforeEach(async () => {
        await browser.reloadSession();
        await browser.url('/registrace');
    });

    it('Existujici Email', async () => {
        //console.log(username)
        //console.log(getRandomEmail())
        const nameField = await $('#name');
        await expect(nameField).toBeDisplayed();
        await expect(nameField).toBeEnabled();
        await nameField.setValue(myName);


        const emailField = await $('#email'); // awaited once, used result on twice
        await expect(emailField).toBeDisplayed();
        await expect(emailField).toBeEnabled();
        await emailField.setValue(adminEmail);

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

        const newEmailField = await $('#email');
        await expect(newEmailField).toBeDisplayed();
        await expect(newEmailField).toHaveElementClass('is-invalid');

        const feedback = await $('.invalid-feedback');
        await expect(feedback).toBeDisplayed();
        await expect(feedback).toHaveText('Účet s tímto emailem již existuje');

        await browser.pause(1000);
        await browser.saveScreenshot('02-existujici-email.png');
    });

});
