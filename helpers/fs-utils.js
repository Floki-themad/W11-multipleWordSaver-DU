const fs = require('fs');
const util = require('util');

const readFromFIle = util.promisify(fs.readFile);

// @param{string}
// @param{object}
// @returns{void}

const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    });
}

// @param{string}
// @param{object}
// @returns{void}

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data)=> {
        if (err) {
            console.error(err);
        } else{
            const parsedData = JSON.parse(data);
        }
    });
};

module.exports = {readFromFIle, writeToFile, readAndAppend}