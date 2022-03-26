const express = require('express');
const app = express();
const { PORT = 3000 } = process.env

console.log('PORT', PORT)

app.get('/', (req, res) =>{
    res.send("WELCOME TO THE HOME PAGE")
});

app.listen(PORT, () => {
    console.log("letsss goooo");
});

