const dynamicIdContainer = document.getElementById('dynamicId');
const dynamicQuoteContainer = document.getElementById('dynamicQuote');
const button = document.getElementById("updateQuoteBtn");

const updateQuoteBtn = document.getElementById('updateQuoteBtn').addEventListener("click", retriveQuote);

function retriveQuote () {
    // Start the rotation animation
    button.style.animation = "rotate 1s linear infinite";

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
            // Stop the rotation animation when data is received
            button.style.animation = 'none';
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
            // Stop the rotation animation upon a fetch error
            button.style.animation = 'none';
        });
    };

retriveQuote();
