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
    const drinkDetails = string.split(" ");
    const [name, price, count] = drinkDetails;
    const apyvarta = (price * count).toFixed(2);

    console.log(
    //   `Pasirinkimas ${++i}: ${name} kurio kaina yra ${price} EUR. Parduota ${count}. Apyvarta: ${apyvarta}`
    );
  }
})();

const jonas = {
  name: "Jonas",
  lastname: "Jonaitis",
  age: 99,
  childrenCount: 3,
  children: [
    {
      name: "Ona",
      dob: 2000,
    },
    {
      name: "One",
      dob: 2001,
    },
    {
      name: "Petriukas",
      dob: 2010,
    },
  ],
};



console.log(jonas.children);
console.log(jonas['children']);

// console.log(jonas.children[2].name);
// console.log(jonas['children'][2]['name']);