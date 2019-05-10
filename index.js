const Browser = require('./src/Browser');
const fs = require('fs');

let result = [];
const countys = {
  63: 'Taipei City',
  65: 'New Taipei City',
  66: 'Taichung City',
  67: 'Tainan City',
  64: 'Kaohsiung City',
};

const getWeather = async (target_url, en_county_name) => {
  let result;
  try {
    const page = await Browser.open(target_url);
    await page.setViewport({ width: 1280, height: 800, });

    result = await page.evaluate((target_url, en_county_name) => {

      const getTextContent = (selector_string, default_string = '') => {
        return document.querySelector(selector_string)
          ? document.querySelector(selector_string).textContent
          : default_string;
      }

      const county = getTextContent('.main-title', 'no county');
      const current_title = getTextContent('.to-to li .title');
      const description = getTextContent('#marquee_1', 'no description');
      const temperature = getTextContent('.to-to li .tem-C, is-active') + '˚C';
      const rain = getTextContent('.to-to li .rain');
      const updated_at = Date.now();

      return { county, en_county_name, current_title, description, temperature, rain, target_url, updated_at };
    }, target_url, en_county_name);

  } catch (err) {
    console.error(err);

  } finally {
    return result;
  }
};

Object.keys(countys).map(cid => {
  target_url = `https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=${cid}`;
  console.log(`${countys[cid]}: ${target_url}`);
  result.push(getWeather(target_url, countys[cid]))
});

Promise.all(result).then(values => {
  Browser.exit();
  console.table(values);
  fs.writeFileSync("./data/json", JSON.stringify(values), function (err) {
    if (err) {
      return console.error(err);
    }
  });
  console.log("The file was saved!");
  process.exit();
}).catch(reason => {
  console.error(reason);
});

