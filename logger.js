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
        myLed.write(1);
        stream.write("je commence")
        setTimeout(function(){
            myLed.write(0);
            stream.write("je suis")
        }, 2000);

        var duration = +new Date() - starTime;
        var msg = method + ' to ' + url + '( ' + duration + ' ms)\n\n';
        stream.write(msg);
    });
    next();


};