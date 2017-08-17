$(function () {
    var body = $('body.rarebg');
    var backgrounds = ['http://www.imhall.com/RandomRares/images/bg1.jpg', 'http://www.imhall.com/RandomRares/images/bg2.jpg', 'http://www.imhall.com/RandomRares/images/bg3.jpg',
                       'http://www.imhall.com/RandomRares/images/bg4.jpg', 'http://www.imhall.com/RandomRares/images/bg5.jpg',
                       'http://i.imgur.com/8xORcUe.jpg', 'http://i.imgur.com/V2nAoQH.jpg', 'http://i.imgur.com/vDXFyQe.jpg', 'http://i.imgur.com/2AC9cB2.jpg',
                       'http://i.imgur.com/2tGtK7O.jpg', 'http://i.imgur.com/5k89qEc.jpg', 'http://i.imgur.com/M5Cbs1N.jpg', 'http://i.imgur.com/SrTF8PX.jpg',
                       'http://i.imgur.com/m0nS7Kc.jpg', 'http://i.imgur.com/b58muh8.jpg', 'http://i.imgur.com/Az6EOhB.jpg',
                       'http://i.imgur.com/ja2qlE1.jpg', 'http://i.imgur.com/YX0YZ6V.jpg', 'http://i.imgur.com/fOZWUn6.jpg', 'http://i.imgur.com/cmcTxRa.jpg',
                       'http://i.imgur.com/lACmD3J.jpg', 'http://i.imgur.com/MppnHBl.jpg', 'http://i.imgur.com/gm1TDtn.jpg', 'http://i.imgur.com/0aEN1ii.jpg',
                       'http://i.imgur.com/8qmB87x.jpg', 'http://i.imgur.com/ZskDU7m.jpg'];
    var wait = 15000
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
