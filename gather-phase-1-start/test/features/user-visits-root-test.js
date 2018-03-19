const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#items-container'), '');
    });
  });

  describe('the user can navigate from root', () => {
    it('to create.html', () => {
      const url = browser.getUrl();
      const expectedUrl = "/create"

      browser.url('/');
      browser.click('a[href="create.html"]');

      assert.equal(url, expectedUrl);
    });
  });
});
