$(function () {
    var body = $('body.rarebg');
    var backgrounds = ['http://www.imhall.com/RandomRares/images/bg1.jpg', 'http://www.imhall.com/RandomRares/images/bg2.jpg', 'http://www.imhall.com/RandomRares/images/bg3.jpg',
                       'http://www.imhall.com/RandomRares/images/bg4.jpg', 'http://www.imhall.com/RandomRares/images/bg5.jpg', 'http://i.imgur.com/NN882th.jpg',
                       'http://i.imgur.com/8xORcUe.jpg', 'http://i.imgur.com/V2nAoQH.jpg', 'http://i.imgur.com/vDXFyQe.jpg', 'http://i.imgur.com/2AC9cB2.jpg',
                       'http://i.imgur.com/2tGtK7O.jpg', 'http://i.imgur.com/5k89qEc.jpg', 'http://i.imgur.com/M5Cbs1N.jpg'];
    var wait = 10000
    function chooseElement(list) {
        i = Math.floor(Math.random() * list.length);
        return list[i];
    }

    function nextBackground() {
        var tempImage = new Image();
        var bgUrl = chooseElement(backgrounds);
        tempImage.src = bgUrl;
        tempImage.onload=function () {
            body.css(
             'background-image',
              'url(' + bgUrl + ')'
           );
        }
        setTimeout(nextBackground, wait);
    }

    var bgUrl = chooseElement(backgrounds);
    setTimeout(nextBackground, wait);
    body.css('background-image', 'url(' + bgUrl + ')');
});
