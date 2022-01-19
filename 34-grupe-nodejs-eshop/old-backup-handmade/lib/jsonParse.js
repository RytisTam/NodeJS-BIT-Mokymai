// funkcija, kuri moka is teksto "pagaminti" JS objekta


function jsonParse(text) {
    try {
        const obj = JSON.parse(text);
        return obj;
    } catch (error) {
        return [true, {}];
    }
}

module.exports = jsonParse;