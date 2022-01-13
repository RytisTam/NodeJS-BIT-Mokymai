console.clear();

const fs = require("fs/promises");

(async () => {
  let content = await fs.readFile("./data/drinks.txt", "utf-8");

  content = content.split("\n");
//   const drinks = {
//     drinkName: [],
//     drinkPrice: [],
//   };
    let i = 0;
  for (const string of content) {
    // drinks.drinkName.push(string.split(" ")[0]);
//     drinks.drinkPrice.push(string.split(" ")[1]);
    const drinkDetails = string.split(' ');
    const [name, price, count] = drinkDetails;
    const apyvarta = (price * count).toFixed(2);
    
    console.log(`Pasirinkimas ${++i}: ${name} kurio kaina yra ${price} EUR. Parduota ${count}. Apyvarta: ${apyvarta}`);
  }
})();
