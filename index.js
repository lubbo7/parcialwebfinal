const express = require('express'),
    consolidate = require('consolidate'),
    app = express();
 
 var fs = require('fs');
    

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.render('home');
    });
    
    app.get('/home',(req,res)=>{
        res.render('home');
    });

    app.get('/reachus',(req,res)=>{
        res.render('reachus');
    });

    app.get('/help',(req,res)=>{
        res.render('help');
    });

app.listen(3000, () => {
    console.log("Puerto working duh");
});