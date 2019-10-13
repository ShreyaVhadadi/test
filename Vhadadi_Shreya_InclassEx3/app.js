const express = require("express");
const app = express();


const configRoutes = require('./routes');
configRoutes(app);

// app.get('/', (req, res) => {
//     res.send('The server is running...')

// });

app.listen(8000, () => { console.log('Shreya Vhadadi') });