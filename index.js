const Browser = require('./src/Browser');

(async () => {
  let result;

  try {
    const page = await Browser.open('https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=63');
    await page.setViewport({ width: 1280, height: 800, });

    result = await page.evaluate(() => {

      const getTextContent = (selector_string, default_string = '') => {
        return document.querySelector(selector_string)
          ? document.querySelector(selector_string).textContent
          : default_string;
      }

      const county = getTextContent('.main-title', 'no county');
      const current_title = getTextContent('.to-to li .title');
      const description = getTextContent('#marquee_1', 'no description');
      const rain = getTextContent('.to-to li .rain');

      return { county, current_title, description, rain };
    });

  } catch (err) {
    console.error(err);
  } finally {
    await Browser.exit();

    console.table(result);
  }

})();
