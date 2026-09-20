import fs from 'node:fs';
import {test} from '@playwright/test';
test('fss',async({page})=>{
console.log('1. Start');

const data = fs.readFileSync('../testdata/sample.pdf', 'utf-8');

console.log('2. File read completed');
console.log('3. End');
})
