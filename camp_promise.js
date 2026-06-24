const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

//promise
function getdataPromise() {
    return new Promise((resolve, reject)=> {
        fs.readFile(dataFilePath, 'utf-8', (err, data) => {
            if(err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
}   
module.exports = { getdataPromise };