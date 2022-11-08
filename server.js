const express = require('express');
const app = express();

const PORT = 3000

const drinks = require('./models/drinks')

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {
        drinks: [...drinks]
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});