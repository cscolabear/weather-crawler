# pure js weather-crawler ![travis-ci-status-image](https://travis-ci.org/cscolabear/weather-crawler.svg?branch=master)

demo: https://cscolabear.github.io/weather-crawler/

---

## Preface

練習 nodejs, puppeteer, react, travis-ci

### How it work
- 使用 puppeteer 抓取 www.cwb.gov.tw

- 資料將存為 `./src/data/data.json`
`npm run build` 後 `./build/index.html`

- Update by travis daily Cron Jobs


desktop preview
![desktop](https://user-images.githubusercontent.com/4863629/59564322-efc9d280-9077-11e9-8570-8eeebd0fa4af.png)


mobile web preview

<img src="https://user-images.githubusercontent.com/4863629/59564323-f0626900-9077-11e9-91dc-a94a8abc23b6.png" alt="mobile" height="480px">


---

## How to use it

```bash
git clone

npm install

npm run build
```

`npm run crawler` preview
![npm-run-build](https://user-images.githubusercontent.com/4863629/57422953-92569080-7244-11e9-880c-eb0fcb2ca151.png)
