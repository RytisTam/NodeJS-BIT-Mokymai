// funkcija, kuri skaiciuoja visu likutiniu (neparduotu) prekiu kieki
// [
//     {
//       name: 'Juoda arbata',
//       price: { value: 2.22, currency: 'Eur' },
//       inStock: 10,
//       sold: 20
//     },
//     {
//       name: 'Raudoni kvepalai',
//       price: { value: 15, currency: 'Eur' },
//       inStock: 4,
//       sold: 7
//     },
//     {
//       name: 'Keturrate masina',
//       price: { value: 100, currency: 'Eur' },
//       inStock: 3,
//       sold: 10
//     }
//   ]


function inStockTotalCount(productListArray) {
    let totalStock = 0;
    for (item of productListArray) {
        totalStock += item.inStock;
        
    }
    console.log(`Turimų prekių sandelyje kiekis: ${totalStock}`);
    }
    
    module.exports = inStockTotalCount;