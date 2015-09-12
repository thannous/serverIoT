module.exports = function (req, res, next) {

    var starTime =  +new Date();
    var stream =    process.stdout;
    var method =    req.method;
    var url =       req.url;

    res.on('finish', function () {
        var duration = +new Date() - starTime;
        var msg = method + ' to ' + url + '( ' + duration + ' ms)\n\n';
        stream.write(msg);
    });
    next();


};