const express = require('express'),
    consolidate = require('consolidate'),
    app = express();

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


app.get('/checkout', (req, res) => {
    res.render('checkout');
});