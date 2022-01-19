// funkcija, kuri moka perskaityti viena konkretu faila
const fs = require("fs/promises");
const path = require("path");
const jsonParse = require('./jsonParse.js');



async function readFile(fileName) {

    function parseJSONtoObject(text) {
        try {
            const obj = jsonParse(text);
            return [false, obj];
        } catch (error) {
            return [true, {}];
        } finally {
            console.log('Baigiau bandyti parsinti failą...');
        }
    }
   

    const fullPath = path.join(__dirname, `../data/${fileName}`);
    const storeJSON = await fs.readFile(fullPath, 'utf-8');
    const [storeError, storeObj] = parseJSONtoObject(storeJSON);

    if (storeError) {console.log('Parsinant failą įvyko klaida.');}

    return storeObj;

    
}




module.exports = readFile;