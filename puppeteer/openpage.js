const puppeteer = require('puppeteer')

const verifyPage = async (page, tp) => {
  await page.goto(`http://localhost:8080/tp${tp}.html`, { waitUntil: 'networkidle0' })
  await page.waitForSelector('#root', { timeout: 1000 })
}

puppeteer.launch().then(async browser => {
  try {
    const errors = []
    const page = await browser.newPage()

    page.on('error', err => {
      errors.push(err)
    })

    page.on('pageerror', pageerr => {
      errors.push(pageerr)
    })

    await page.setViewport({ width: 1280, height: 800 })
    for (const tp of ['01', '02', '03', '04', '05', '06', '07', '08', '09']) {
      await verifyPage(page, tp)
    }

    if (errors.length) {
      console.error(errors.join('\n'))
      process.exit(1)
    }

    console.log('all TPs are OK')
  } finally {
    await browser.close()
  }
})
