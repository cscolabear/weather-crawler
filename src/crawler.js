const fs = require('fs');
const Browser = require('./lib/Browser');

const countys = {
  63: 'Taipei City',
  65: 'New Taipei City',
  66: 'Taichung City',
  67: 'Tainan City',
  64: 'Kaohsiung City',
  10002: 'Yilan County',
  10015: 'Hualien County',
};

const jsonDataPath = './src/data/data.json';

const getWeather = async (target_url, en_county_name) => {
  const page = await Browser.open(target_url);
  await page.setViewport({
    width: 1280,
    height: 800,
  });

  const result = await page.evaluate((target_url, en_county_name) => {
    const getContent = (
      selector_string,
      getCount = 1,
      getAttributes = ['textContent'],
    ) => {
      const target = document.querySelectorAll(selector_string);
      if (target.length <= 0) {
        return [null];
      }
      const getAttribute = (dom) => {
        if (getAttributes.length === 1) {
          return dom[getAttributes[0]];
        }

        const att_result = {};
        getAttributes.forEach((att) => {
          att_result[att] = dom[att] || null;
        });
        return att_result;
      };

      const data = [];
      let inx = 0;
      while (inx < getCount) {
        data.push(
          getAttribute(target[inx]),
        );
        inx += 1;
      }
      return data;
    };


    const public_time = getContent('.public-time')[0];
    const county = getContent('.main-title')[0];
    const current_title = getContent('.to-to li .title', 3);
    const description = getContent('#marquee_1')[0];
    const temperature = getContent('.to-to li .tem-C, is-active', 3);
    const rain = getContent('.to-to li .rain', 3)
      .map(str => (str.match(/\d+/mg) || '')[0] || null);
    const rainImg = getContent('.to-to li img', 3, ['src', 'alt']);

    const all_day = {
      current_title,
      temperature,
      rain,
      rainImg,
    };

    return {
      public_time,
      county,
      en_county_name,
      description,
      all_day,
      target_url,
    };
  }, target_url, en_county_name);

  return result;
};

const promise_queue = [];
Object.keys(countys).map((cid) => {
  const target_url = `https://www.cwb.gov.tw/V8/C/W/County/County.html?CID=${cid}`;
  console.log(`${countys[cid]}: ${target_url}`);
  try {
    promise_queue.push(getWeather(target_url, countys[cid]));
  } catch (error) {
    console.error(error);
  }

  return true;
});

Promise.all(promise_queue).then((values) => {
  Browser.exit();
  const dataset = {
    updated_at: Date.now(),
    data: {},
  };
  values.forEach((item) => {
    const Id = item.en_county_name.toLowerCase().replace(/\s+/gi, '-');
    dataset.data[Id] = item;
  });

  console.table(dataset.data);

  fs.writeFileSync(jsonDataPath, JSON.stringify(dataset), (err) => {
    if (err) {
      return console.error(err);
    }
    return true;
  });
  console.log('The file was saved!');

  return process.exit();
}).catch((reason) => {
  console.error(reason);
});
