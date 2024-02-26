const express = require('express');
const app= express();

const port=process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('HELLO DJ');
});


app.listen(port, () => {
    console.log(`Server listening in port: ${port}`);
});