const express = require('express'),
    consolidate = require('consolidate'),
    app = express();
 
 var fs = require('fs');

 var contadorHelp = 0,
 contadorHome = 0,
 contadorReachUs = 0;
    

app.engine('hbs', consolidate.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    
    res.render('home');
    });
    
    app.get('/home',(req,res)=>{
        res.render('home');
        contadorHome=+1;

    });

    app.get('/reachus',(req,res)=>{
        res.render('reachus');
        contadorReachUs+1;        
    });

    app.get('/help',(req,res)=>{
        res.render('help');
        contadorHelp=+1;
        console.log(contadorHelp);
    });

    fs.readFile('contadorvisitas.txt', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
         
        var resultado = data.replace(contadorHelp);
        fs.writeFile('contadorvisitas.txt', resultado, 'utf8', function(err) {
            if (err) {
               return console.log(err);
            };
        });
    });




app.listen(3000, () => {
    console.log("Puerto working duh");
});