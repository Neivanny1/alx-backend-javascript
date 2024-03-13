// task_3/main.ts
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`CRUD.insertRow(obj)\n// Insert row ${JSON.stringify(row)}\n`);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

console.log(`const updatedRow: RowElement = ${JSON.stringify(updatedRow)};`);
console.log(`CRUD.updateRow(newRowID, updatedRow);\n// Update row ${newRowID} ${JSON.stringify(updatedRow)}\n`);

CRUD.deleteRow(newRowID);
console.log(`CRUD.deleteRow(${newRowID});\n// Delete row id ${newRowID}\n`);
