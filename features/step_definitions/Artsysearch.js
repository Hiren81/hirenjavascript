// features/step_definitions/google.js

const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

defineSupportCode(({Given, Then, When}) => {
    Given(/^i am on the home page of Artsyjewels$/, () => {
        return client
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body', 1000);
    });

    Then(/^i can see the search box"([^"]*)"$/, () => {
        return client.assert.visible('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input');
    });

    Then(/^i can click the search box"([^"]*)"$/, () => {
        return client.click('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input');
    });

    Then(/i can search for pendant$/, () => {
        return client.setValue('#shopify-section-header > div > header > div > div.grid__item.small--hide.medium-up--one-third > div > form > input', 'pedant');
        
    });
    Then(/i click on shop now button$/, () => {
        return client.click('#shopify-section-hero > div > div > div > a');
        
    });

});
