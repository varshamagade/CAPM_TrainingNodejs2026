
const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

function getdata() {
    const  data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
}

//module.exports = {getdata};

//assignemnt 2
function  getdataPromise(){
    return new Promise((resolve, reject) => {
        fs.readFile(dataFilePath, 'utf-8', (err, data) => {
            if(err) reject(err);
            else resolve(JSON.parse(data));
        });
    });
} 
module.exports = {getdata, getdataPromise};
