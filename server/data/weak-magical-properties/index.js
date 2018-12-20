const Papa = require('papaparse');
const fs = require('fs');
const path = require("path");

const options = {
    header: true,
};

const armorCSV = fs.readFileSync(path.resolve(__dirname, 'armor.csv'), 'utf8');
const trinketCSV = fs.readFileSync(path.resolve(__dirname, 'trinket.csv'), 'utf8');
const weaponCSV = fs.readFileSync(path.resolve(__dirname, 'weapon.csv'), 'utf8');


const armor = Papa.parse(armorCSV, options).data;
const trinket = Papa.parse(trinketCSV, options).data;
const weapon = Papa.parse(weaponCSV, options).data;

module.exports = { armor, trinket, weapon };