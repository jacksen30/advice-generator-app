const quoteP = document.getElementById('quote-text');
const idP = document.getElementById('idP');



fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        idP.innerHTML = data.slip.id;
        quoteP.innerHTML = `" ${data.slip.advice} "`;
    });




// .then(data => console.log(data.slip.advice, data.slip.id));