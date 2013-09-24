require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here

    (function(){
        var quotes = $('.quote-block').toArray();
        var currentQuote = 0;
        setInterval(function() {
            quotes[currentQuote].className = 'quote-block off';
            currentQuote = (currentQuote + 1) % quotes.length;
            quotes[currentQuote].className = 'quote-block';
        }, 10000);
    })();

    (function(){
        var OPEN_HEIGHT_ADJUSTMENT = 100;
        var fullLetter = document.getElementById('full-letter');
        var fullLetterButton = fullLetter.getElementsByTagName('a')[0];
        var letterContents = $('#letter-contents')[0];
        var fullLetterButtonOriginalHTML = fullLetterButton.innerHTML;
        var letterIsOpen = false;
        fullLetterButton.onclick = function () {
            letterIsOpen = !letterIsOpen;
            fullLetter.style.height = letterIsOpen ? letterContents.offsetHeight + OPEN_HEIGHT_ADJUSTMENT + 'px' : '';
            fullLetterButton.innerHTML = letterIsOpen ? 'Close Letter' : fullLetterButtonOriginalHTML;
            return false;
        };
    })();

        
});
