const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

// Add your tests below:
describe('The user visits the create page', () => {
  describe('posts a new item', () => {
    it('can see new item rendered', () => {
      const title = "Bears";
      const description = "Bears doing things";
      const imageUrl = "https://images.unsplash.com/photo-1496297679486-1a1607669129?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8272b690486f645c323e96b3cc23c88a&auto=format&fit=crop&w=668&q=80";
      const itemToCreate = buildItemObject();

      browser.url('/create.html');

      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');

      assert.include(browser.getText('body', itemToCreate.title));
      assert.include(browser.getAttribute('body img', 'src'), itemToCreate.imageUrl);
    });
  });
});
