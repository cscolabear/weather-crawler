const assert = require('assert');
const Browser = require('../src/Browser');

const target_url = 'https://www.cwb.gov.tw/V8/C/W/County/County.html';
const expect_title = '縣市預報 | 交通部中央氣象局';
let page;

describe('Test Browser.js', async () => {

  it('Browser Opens Successfully', async () => {
    await Browser.start();
  }).timeout(0);

  it('Website Should Load `www.cwb.gov.tw`', async () => {
    page = await Browser.open(target_url);
  }).timeout(10000);

  it('response status equal 200', async () => {
    assert.strictEqual(Browser.response.status(), 200);
  });

  it(`title equal "${expect_title}"`, async () => {
    const title = await page.evaluate(() => document.title);
    assert.strictEqual(title, expect_title);
  });

  it('Browser Closes Successfully', async () => {
    await Browser.exit();
  });
});
