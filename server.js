const express = require('express');
const sequelize = require('./config/connection');
console.log(1)
const session = require('express-session');
console.log(2);
const SequelizeStore = require('connect-session-sequelize')(session.Store);
console.log(3);
const routes = require('./controllers');


console.log(4);
const app = express();
const PORT = process.env.PORT || env;

const sess = {
    secret: process.env.SECRET,
    cookie: {

    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);


sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
})