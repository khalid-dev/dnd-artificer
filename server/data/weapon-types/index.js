const Papa = require('papaparse');
const fs = require('fs');
const path = require("path");

const options = {
    header: true,
};

const martialMeleeCSV = fs.readFileSync(path.resolve(__dirname, 'martial-melee.csv'), 'utf8');
const martialRangedCSV = fs.readFileSync(path.resolve(__dirname, 'martial-ranged.csv'), 'utf8');
const simpleMeleeCSV = fs.readFileSync(path.resolve(__dirname, 'simple-melee.csv'), 'utf8');
const simpleRangedCSV = fs.readFileSync(path.resolve(__dirname, 'simple-ranged.csv'), 'utf8');

const martialMelee = Papa.parse(martialMeleeCSV, options).data;
const martialRanged = Papa.parse(martialRangedCSV, options).data;
const simpleMelee = Papa.parse(simpleMeleeCSV, options).data;
const simpleRanged = Papa.parse(simpleRangedCSV, options).data;

module.exports = { martialMelee, martialRanged, simpleMelee, simpleRanged };