let value = document.getElementById("showValue");
let high = document.getElementById("showHigh");
let low = document.getElementById("showLow");

$("button").click(function() {
    let fired_button = $(this).val();
    let requestURL = `https://economia.awesomeapi.com.br/json/all/${fired_button}`;
    let request = new XMLHttpRequest;
    request.open('GET', requestURL);
    request.responseType = 'text';

    request.send();

    request.onload = function() {
        let documentText = request.response; // get the string from the response
        let document = JSON.parse(documentText); // convert it to an object
        if (fired_button === "USD-BRL") {
            value.innerHTML = parseFloat(JSON.stringify(document.USD.bid).replace(/['"]+/g, '')).toFixed(2);
            high.innerHTML = parseFloat(JSON.stringify(document.USD.high).replace(/['"]+/g, '')).toFixed(2);
            low.innerHTML = parseFloat(JSON.stringify(document.USD.low).replace(/['"]+/g, '')).toFixed(2);
        }else if(fired_button === "EUR-BRL")
        {
            value.innerHTML = parseFloat(JSON.stringify(document.EUR.bid).replace(/['"]+/g, '')).toFixed(2);
            high.innerHTML = parseFloat(JSON.stringify(document.EUR.high).replace(/['"]+/g, '')).toFixed(2);
            low.innerHTML = parseFloat(JSON.stringify(document.EUR.low).replace(/['"]+/g, '')).toFixed(2);
        }else
        {
            value.innerHTML = parseFloat(JSON.stringify(document.BTC.bid).replace(/['"]+/g, '')).toFixed(2);
            high.innerHTML = parseFloat(JSON.stringify(document.BTC.high).replace(/['"]+/g, '')).toFixed(2);
            low.innerHTML = parseFloat(JSON.stringify(document.BTC.low).replace(/['"]+/g, '')).toFixed(2);
        }
        
    }

}); 


    


