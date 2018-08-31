const puppeteer = require('puppeteer');
puppeteer.launch().then(async browser => {
  try {
    const errors = [];
    const page = await browser.newPage();

    page.on('error', err => {
      errors.push(err);
    });

    page.on('pageerror', pageerr => {
      errors.push(pageerr);
    });

    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('http://localhost:8080/tp01.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp02.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp03.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp04.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp05.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp05-02.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp06.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp07.html', {waitUntil: 'networkidle0'});
    // await page.goto('http://localhost:8080/tp07-02.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp08.html', {waitUntil: 'networkidle0'});
    await page.goto('http://localhost:8080/tp09.html', {waitUntil: 'networkidle0'});

    if (errors.length) {
      throw new Error(errors.join('\n'));
    }

    console.log('all TPs are OK');
  } finally {
    await browser.close();
  }
});
