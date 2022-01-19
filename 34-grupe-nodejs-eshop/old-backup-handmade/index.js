console.clear();
const fs = require('fs');
const listOfProductTypes = fs.readdirSync('./data/');

// Function imports
const readFile = require('./lib/readFile.js')
const printList = require('./lib/printList.js');
const inStockTotalCount = require('./lib/inStockTotalCount.js');

// Variables
const storeProducts = [];
// console.log(listOfProductTypes);
/*
UZDUOTIS:
- perskaityti visu produktu failus;
- susideti visus produktus i viena bendra masyva;
- isspausdinti produktu lentele, kuri atordys taip (zr. zemiau)
"Univermagas" pardavime turi:
-----------------------------
1) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
2) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
3) Prekes pavadinimas: [kaina] [valiuta]; parduota: [kiekis]; likutis: [kiekis];
-----------------------------
Parduotuves suvestine:
- turimu prekiu sandelyje: [total kiekis]
- parduotu prekiu: [total kiekis]
- suprekiauta suma: [total pinigu] [valiuta]
- galimu pardavimu: [total pinigu] [valiuta]
- maksimalus galima parduotuves apyvarta: [total pinigu] [valiuta]
*/

(async () => {
    for (productItem of listOfProductTypes) {
  storeProducts.push(await readFile(productItem));
    }
    console.log(storeProducts);
    console.log('"Univermagas" pardavime turi:');
    console.log('--------------------------------');
    printList(storeProducts);
    console.log('--------------------------------');
    console.log('Parduotuves suvestinė:');
    inStockTotalCount(storeProducts);
})();



