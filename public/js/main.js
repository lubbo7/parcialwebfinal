var help = document.getElementById('help'),
    home = document.getElementById('home'),
    reachus = document.getElementById('reachus');

    var contadorHelp = 0,
    contadorHome = 0,
    contadorReachUs = 0;
    

    help.addEventListener('click', function () {
        contadorHelp +=1;
    });

    home.addEventListener('click', function () {
        contadorHome +=1;
    });

    reachus.addEventListener('click', function () {
        contadorReachUs +=1;
        console.log('SUMANDO REACH');
    });

