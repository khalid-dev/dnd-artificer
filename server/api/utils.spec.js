const chai = require('chai');
const expect = chai.expect
const getRandom = require('./utils');


describe('getRandom utility function', () => {
    const data = [ { 'Armor Name': 'Ring mail',
        Cost: '30 gp',
        'Armor Class (AC)': '14',
        Strength: '-',
        Stealth: 'Disadvantage',
        Weight: '40 lb.' },
      { 'Armor Name': 'Chain mail',
        Cost: '75 gp',
        'Armor Class (AC)': '16',
        Strength: 'Str 13',
        Stealth: 'Disadvantage',
        Weight: '55 lb.' },
      { 'Armor Name': 'Splint',
        Cost: '200 gp',
        'Armor Class (AC)': '17',
        Strength: 'Str 15',
        Stealth: 'Disadvantage',
        Weight: '60 lb.' },
      { 'Armor Name': 'Plate',
        Cost: '1,500 gp',
        'Armor Class (AC)': '18',
        Strength: 'Str 15',
        Stealth: 'Disadvantage',
        Weight: '65 lb.' } 
    ];
    it('Is a function', () => {
        expect(getRandom).to.be.a('function');
    });
    it('It takes a set of data and a number n and returns an array of n items from data', () => {
        expect(getRandom(data, 5)).to.have.lengthOf(5);
    });
    it('Has uniform distribution in its results', () => {
        const results = {
            'Ring mail': 0,
            'Chain mail': 0,
            'Splint': 0,
            'Plate': 0
        }
        for (let i = 0; i < 1000; i++) {
            const randomSet = getRandom(data, 10);
            randomSet.forEach(item => {
                const armorName = item['Armor Name'];
                results[armorName]++;
            })
        }
        expect(results['Ring mail']).to.be.within(2300, 2700);
        expect(results['Chain mail']).to.be.within(2300, 2700);
        expect(results['Splint']).to.be.within(2300, 2700);
        expect(results['Plate']).to.be.within(2300, 2700);
    })
});

