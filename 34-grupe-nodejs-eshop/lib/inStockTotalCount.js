// funkcija, kuri skaiciuoja visu likutiniu (neparduotu) prekiu kieki



function inStockTotalCount(goods) {
    let totalStock = 0;
    for (item of goods) {
        totalStock += item.inStock;
    }
    return totalStock;
    }
    
    module.exports = inStockTotalCount;