const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from new Jenkins CI/CD Pipeline");
});

app.listen(3000, () => {
    console.log("Server started");
});
