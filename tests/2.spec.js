import{test} from '@playwright/test';
import fs from 'fs';

test.describe('waitforevent',async()=>{
/*test('waitforevent', async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');

  const [fileChooser] = await Promise.all([page.waitForEvent('filechooser'), page.locator('#singleFileInput').click()
]);
await fileChooser.setFiles('D:/SQL/E2E/testdata/sample.pdf');
  await page.locator('//*[@id="singleFileForm"]/button').click();
  await page.waitForTimeout(20000);

  /*const fileChooserPromise = page.waitForEvent('filechooser');
  await page.locator('#singleFileInput').click();
  //const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles('D:/SQL/E2E/testdata/sample.pdf');
  await page.locator('//*[@id="singleFileForm"]/button').click();
  await page.waitForTimeout(20000);
})*/

test('read file', async({page})=>{
const data = fs.readFileSync('D:/SQL/E2E/testdata/sample.pdf','utf-8');
console.log('dataa');
await page.goto('https://www.google.com');
console.log(data);
})
test('read file1', async({page})=>{
const data = await fs.readFile('D:/SQL/E2E/testdata/sample.pdf','utf-8');
console.log('dataa');
await page.goto('https://www.google.com');
console.log(data);
})
})
