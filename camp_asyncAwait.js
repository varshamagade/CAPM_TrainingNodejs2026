const  {getdataPromise } = require('./taskManager');
async function fetchData() {
    try {
        const data = await getdataPromise();
        console.log("Tasks from async/await:");
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}
fetchData();