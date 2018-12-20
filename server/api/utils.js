
const randomIx = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

const getRandom = (data, numEntries) => {
    const randomEntries = [];
    while (randomEntries.length < numEntries) {
        randomEntries.push(data[randomIx(data.length)]);
    };
    return randomEntries;
};

export default getRandom;