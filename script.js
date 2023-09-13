const dynamicIdContainer = document.getElementById('dynamicId');
const dynamicQuoteContainer = document.getElementById('dynamicQuote');

const updateQuoteBtn = document.getElementById('updateQuoteBtn').addEventListener("click", retriveQuote);

function retriveQuote () {
    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => {
            dynamicIdContainer.innerHTML = `Advice # ${data.slip.id}`;
            dynamicQuoteContainer.innerHTML = `&ldquo;${data.slip.advice}&rdquo;`;
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
    };

retriveQuote();
