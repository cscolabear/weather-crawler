const puppeteer = require('puppeteer');

function Browser() {
  this.option = {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  };
}

Browser.prototype.start = async function start() {
  if (!this.browser) {
    this.browser = await puppeteer.launch(this.option);
    this.browser.once('disconnected', () => {
      this.browser = undefined;
    });
  }
  return this.browser;
};

Browser.prototype.exit = async function exit() {
  if (!this.browser) {
    return;
  }
  await this.browser.close();
};

Browser.prototype.open = async function open(url) {
  await this.start();
  const page = await this.browser.newPage();
  this.response = await page.goto(url, {
    waitUntil: 'load',
    timeout: 0,
  });
  return page;
};

const browser = new Browser();

module.exports = browser;
