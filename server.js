const express = require('express');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const session = require('express-session');

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