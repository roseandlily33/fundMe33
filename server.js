const express = require('express');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || env;

app.use(routes);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})