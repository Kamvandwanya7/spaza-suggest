const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const flash = require('express-flash')
const session = require('express-session')


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const DATABASE_URL = process.env.DATABASE_URL || "postgresql://zuggs:suggest123@localhost:5432/spaza_suggest";


app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json())

app.use(session({
    secret: 'this is my longest string that is used to test my spaza app with routes app for browser',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

const pgp = require('pg-promise')({});

const SpazaSuggest = require('./spaza-suggest')
const config = {
    connectionString: DATABASE_URL
}
const db = pgp(config);
const spazaSuggest = SpazaSuggest(db);

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', async function (req, res) {
    res.render('')
})

app.post('/registerClient', async function (req, res) {
    let user = req.body.username;
    // console.log(req.body.username);
    await spazaSuggest.registerClient(user)
    res.render('suggest')
    // req.flash('success', "Welcome" + ertyuhjkl)

    // res.render('log')
})

// app.get('/clientLogin', async function (req, res) {
//     const user_input= req.params.username
//     // console.log(user_input);
//     const user_code = req.session.code
//     // console.log(user_code);
//    if (user_code) {
//         req.flash('success', 'Welcome' + ertyuhjkl)
//    }
//     res.render('suggest')
// })


app.post('/suggestProduct', async function (req, res) {

})

app.post('/suggestProduct', async function (req, res) {

})


app.post('/registerSpaza', async function (req, res) {

})

app.get('/spazaLogin', async function (req, res) {

})

app.post('/suggestionsForArea', async function (req, res) {

})

app.post('/acceptSuggestion', async function (req, res) {

})

app.get('/acceptedSuggestions', async function (req, res) {

})

app.post('/productsForArea', async function (req, res) {

})

app.get('/areas', async function (req, res) {

})

let PORT = process.env.PORT || 2024;
app.listen(PORT, function () {
    console.log('App starting on port', PORT)
})

