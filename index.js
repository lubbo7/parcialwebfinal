const express = require('express'),
    consolidate = require('consolidate'),
    app = express();

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.render('home');
    });

app.listen(3000, () => {
    console.log("Puerto working duh");
});