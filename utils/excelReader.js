import XLSX from 'xlsx';
import path from 'path';

export function readExcel(fileName, sheetName) {
  const filePath = path.join(
    process.cwd(),
    'testData',
    fileName
  );

  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets[sheetName];

  return XLSX.utils.sheet_to_json(worksheet);
}

//import { readExcel } from '../utils/commonFunctions.js';

//const users = readExcel('registrationData.xlsx', 'Sheet1');