const app = {
    init: function(){
        app.displayQuote();
    },

    displayQuote: function(){
        const quoteElement = document.querySelector('#quote');
        quoteElement.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }
};

document.addEventListener('DOMContentLoaded', app.init);