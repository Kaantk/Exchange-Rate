const APIKey = "Your API Key";
const url = "https://v6.exchangerate-api.com/v6/" + APIKey;

fetch(url + "/codes")
.then(response => response.json())
.then(data => {
    const items = data.supported_codes;
    let options;

    for(let item of items) {
        options += `<option value=${item[0]}>${item[1]}</option>`; 
    }

    document.getElementById('list_one').innerHTML = options;
    document.getElementById('list_two').innerHTML = options;
})

document.getElementById('btnCalculate').addEventListener('click', () => {
    let currencyOne = document.getElementById('currency_one').value;
    let currencyTwo = document.getElementById('currency_two').value;
    let amount = document.getElementById('amount').value;

    fetch(url + "/latest/" + currencyOne)
    .then(response => response.json())
    .then(data => {

        const result = data.conversion_rates[currencyTwo] * amount;

        document.getElementById('result').innerHTML = `
            <p>${amount} ${currencyOne} = ${result} ${currencyTwo}</p>
        `

    });

})
