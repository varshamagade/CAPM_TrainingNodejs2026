console.log("Welcome to CAP Training 2026");

///assignment 1
const taskmanager = require('./taskManager');
const tasks = taskmanager.getdata();
console.log("Tasks from custom module:");
console.log(tasks);


//assignment 2
const  {getdataPromise } = require('./taskManager');
 getdataPromise ()
 .then((data) => {
    console.log("Tasks from promise:");
    console.log(data);
})
.catch((err) => console.error(err));

async function fetchData() {
    try {
        const data = await getdataPromise();
        console.log("Tasks from async/await:");
        console.log(data);
    } catch(error) {
        console.error(error);
    }
}

//assignement 3

const express = require('express');
const dayjs = require('dayjs');


const app = express();
const PORT = 8080;

// Root route -> show current date
app.get('/', (req, res) => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  res.send(`Current Date: ${currentDate}`);
});

// /tasks route -> show tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await getdataPromise();
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Error fetching tasks");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
