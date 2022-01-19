// funkcija, kuri skaiciuoja visu parduotu prekiu kieki



function soldTotalCount(goods) {
    let totalSold = 0;
    for (item of goods) {
        totalSold += item.sold;
    }
    return totalSold;
    }
    
    module.exports = soldTotalCount;