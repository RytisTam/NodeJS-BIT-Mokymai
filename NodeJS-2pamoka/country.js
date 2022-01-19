const fs = require("fs/promises");
const path = require("path");

// let rawdata = fs.readFileSync('./data/country.json');
// let countryData = JSON.parse(rawdata);

// console.log(countryData);

// [Parent-name] [Parent-surname] has [count] children and they names are: [Child-name], [Child-name], [Child-name].

(async () => {
    function parseJSONtoObject(text) {
        try {
            const obj = JSON.parse(text);
            return [false, obj];
        } catch (error) {
            return [true, {}];
        } finally {
            console.log('Baigiau bandyti parsinti faila...');
        }
    }
   

  const fullPath = path.join(__dirname, "./data/country.json");
  const countryContent = await fs.readFile(fullPath, 'utf-8');
  const [personError, personObj] = parseJSONtoObject(countryContent);
  // personDetails = JSON.parse(personDetails);
//   console.log(personObj);

  if (personError) {console.log('Parsinant faila ivyko klaida.');}

    // function childrenNames(childrenList) {
    // const childrenNames = [];
    // for (childrenName of personObj.children) {
    //     childrenNames.push(childrenName.name);
    // }
    // return childrenNames.join(', ');
    // }

    children = personObj.children.map( n => n.name);
  

  console.log(`${personObj.name} ${personObj.lastname} has ${personObj.childrenCount} children and their names are: ${children.join(', ')}`);
})();
