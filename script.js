const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector('form');
const amount = document.querySelector('#amount');
const currency = document.querySelector('#currency');

const convertCurrency = (amount, currency, symbol) => {
    console.log(amount, currency, symbol)
}

amount.addEventListener('input', () => {
    const hasCharacterRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharacterRegex, '');
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    switch(currency.value){
        case 'USD':
            convertCurrency(amount.value, USD, '$');
            break;
        case 'EUR':
            convertCurrency(amount.value, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amount.value, GBP, '£');
            break;
    }
});