const currencies = {
    'Eur':1,
    'Usd':1.13,
    'Lit':3.45,
}


function totalSoldSum(goods) {
    let totalSold = 0;
    for (item of goods) {
        let value = item.sold * item.price.value / currencies[item.price.currency];
        
        totalSold += value;
    }
    return totalSold;
    }
    
    module.exports = totalSoldSum;