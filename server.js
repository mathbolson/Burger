const express = require('express');;
const expressHB = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHB({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgerController');

app.use(routes);

app.listen(PORT, () => {
    console.log('Server listening on PORT ' + PORT);
});
