(function() {
    "use strict";
    
    const adviceId = document.getElementById('adviceId');
    const cardQuote = document.getElementById('cardQuote');
    const diceBtn = document.getElementById('diceBtn');

    defaultQuote();
    
    
    diceBtn.addEventListener('click', () => {
        getAdvice();
    });

    function defaultQuote() {
        fetch('https://api.adviceslip.com/advice/117').then(response => {
            return response.json();    
        }).then(adviceData => {
            const adviceObject = adviceData.slip;
            cardQuote.innerHTML = `${adviceObject.advice}`;
            adviceId.innerHTML = `${adviceObject.id}`
        }).catch(error => {
            console.log(error);
        });
    }

    function getAdvice() {
        fetch('https://api.adviceslip.com/advice').then(response => {
            return response.json();
        }).then(adviceData => {
            const adviceObject = adviceData.slip;
            cardQuote.innerHTML = `${adviceObject.advice}`;
            adviceId.innerHTML = `${adviceObject.id}`
        }).catch(error => {
            console.log(error);
        });
    }


}());