const Papa = require('papaparse');
const fs = require('fs');
const path = require("path");

const options = {
    header: true,
};

const normalTrinketCSV = fs.readFileSync(path.resolve(__dirname, 'normal-trinket.csv'), 'utf8');

const normalTrinket = Papa.parse(normalTrinketCSV, options).data;

module.exports = { normalTrinket };