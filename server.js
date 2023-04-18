const express = require('express');

const app = express();
const PORT = process.env.PORT || env;


Sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})