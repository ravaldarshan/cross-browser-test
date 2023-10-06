import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('http://timelyco.codelinkinfotech.com/')

  // keep browser open
  await page.pause()
})