var mraa = require('mraa'); //require mraa
console.log('MRAA Version: ' + mraa.getVersion());

module.exports = function (req, res, next) {

    var starTime =  +new Date();
    var stream =    process.stdout;
    var method =    req.method;
    var url =       req.url;
    var myLed = new mraa.Gpio(7);
    myLed.dir(mraa.DIR_OUT);

    res.on('finish', function () {
        setTimeout(function(){
            myLed.write(1);
        }, 2000);
        myLed.write(0);
        var duration = +new Date() - starTime;
        var msg = method + ' to ' + url + '( ' + duration + ' ms)\n\n';
        stream.write(msg);
    });
    next();


};