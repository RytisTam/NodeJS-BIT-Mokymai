// console.clear();

const a1 = [10, 8, 2, 4];
const a2 = [1, 3, 5, 7, 9];
const a3 = [147, 258, 369, 123, 456, 789];

function calculate(x) {
  let suma = 0;
  let vidurkis = 0;
  x.forEach((e) => {
    suma += e;
  });
  vidurkis = suma / x.length;
  console.log(`${x} skačių vidurkis lygus ${vidurkis}`);
}

// calculate(a3);

// Rezultata pateikti tokiu sablonu:
// Legendines asmenybes [Vardas] [Pavarde] trumpinys yra [V.P.]

const s1 = 'Mike Pukuotukas';
const s2 = 'Chuck Norris';
const s3 = 'Wonder WomaN';
const s4 = 'Algimantas cekuolis';

function legend(x) {
    let vp = x.split(" ");
    let vardas1raide = vp[0][0].toUpperCase();
    let pavarde1raide = vp[1][0].toUpperCase();

    console.log(`Legendines asmenybes ${vp[0]} ${vp[1]}, kurio inicialai yra: ${vardas1raide}.${pavarde1raide}.`)
}

// legend(s1);
// legend(s2);
// legend(s3);
// legend(s4);


const jonas = {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 99,
}


const maryte = {
    name: 'Maryte',
    surname: 'Marytaite',
    age: 87,
    getDetails: function() {
        console.log(`${this.name}, ${this.surname} yra ${this.age} metų amžiaus.`);
    },
}

function printPersonDetails(x) {
    console.log(`${x.name}, ${x.surname} yra ${x.age} metų amžiaus.`);
}

printPersonDetails(jonas);
// printPersonDetails(maryte);
maryte.getDetails();

