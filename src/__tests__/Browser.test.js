const Browser = require('../lib/Browser');

const target_url = 'https://www.cwb.gov.tw/V8/C/W/County/County.html?cid=63';
const expect_title = '臺北市 - 縣市預報 | 交通部中央氣象局';

jest.setTimeout(30000);

describe('Test Browser.js', () => {
  let page;

  it('Browser Opens Successfully', async () => {
    await Browser.start();
  });

  it('Website Should Load `www.cwb.gov.tw`', async () => {
    page = await Browser.open(target_url);
  });

  it('response status equal 200', async () => {
    expect(Browser.response.status()).toBe(200);
  });

  it(`title equal "${expect_title}"`, async () => {
    const title = await page.evaluate(() => document.title);

    expect(title).toEqual(expect_title);
  });

  it('Browser Closes Successfully', async () => {
    await Browser.exit();
  });
});
