const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send("WELCOME TO THE HOME PAGE")
});

app.listen(3000, () => {
    console.log("letsss goooo");
});

