// funkcija, kuri gauna prekiu sarasa ir ji isspausdina nurodytu formatu

function printList(productListArray) {
for (item of productListArray) {
    console.log(`${item.name}: ${item.price.value} ${item.price.currency}; parduota: ${item.sold}; likutis: ${item.inStock}`);
}
}

module.exports = printList;