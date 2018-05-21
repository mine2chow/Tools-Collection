var page = require('webpage').create();

var width = 6970;
var height = 5500;
var sp = "Mozilla/5.0 (Linux; Android 6.0.1;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.91 Mobile Safari/537.36";
var pc = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36";
var userAgent = pc;

page.zoomFactor = 1.0;
page.viewportSize = { width: width, height: height };
page.settings.userAgent = userAgent;

page.onLoadStarted = function() {

};

page.onLoadFinished = function(status) {
    page.render("result.png");
    phantom.exit();
};

page.open("baidu.html");
