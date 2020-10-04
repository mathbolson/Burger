var express = require('express');;
var expressHB = require('express-handlebars');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', expressHB({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, () => {
    console.log('Server listening on PORT ' + PORT);
});