const Papa = require('papaparse');
const fs = require('fs');
const path = require("path");

const options = {
    header: true,
};

const heavyArmorCSV = fs.readFileSync(path.resolve(__dirname, 'heavy-armor.csv'), 'utf8');
const lightArmorCSV = fs.readFileSync(path.resolve(__dirname, 'light-armor.csv'), 'utf8');
const mediumArmorCSV = fs.readFileSync(path.resolve(__dirname, 'medium-armor.csv'), 'utf8');
const shieldCSV = fs.readFileSync(path.resolve(__dirname, 'shield.csv'), 'utf8');

const heavyArmor = Papa.parse(heavyArmorCSV, options).data;
const mediumArmor = Papa.parse(mediumArmorCSV, options).data;
const lightArmor = Papa.parse(lightArmorCSV, options).data;
const shield = Papa.parse(shieldCSV, options).data;

module.exports = { lightArmor, mediumArmor, heavyArmor, shield };