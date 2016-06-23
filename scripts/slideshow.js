$(function () {
    var body = $('body');
    var backgrounds = ['url(../RandomRares/images/bg1.jpg)', 'url(../RandomRares/images/bg2.jpg)', 'url(../RandomRares/images/bg3.jpg)',
                       'url(../RandomRares/images/bg4.jpg)', 'url(../RandomRares/images/bg5.jpg)'];
    var wait = 10000
    function chooseElement(list) {
        i = Math.floor(Math.random() * list.length);
        return list[i];
    }

    function nextBackground() {
        body.css(
         'background-image',
          chooseElement(backgrounds)
       );

        setTimeout(nextBackground, wait);
    }
    setTimeout(nextBackground, wait);
    body.css('background-image', chooseElement(backgrounds));
});
