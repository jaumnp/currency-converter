const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form        = document.querySelector('form');
const amount      = document.querySelector('#amount');
const currency    = document.querySelector('#currency');
const footer      = document.querySelector('main footer');
const description = document.querySelector('#description');
const result      = document.querySelector('#result');

const formatCurrencyBRL = (value) => {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

const convertCurrency = (amount, currency, symbol) => {
    try {

        const total = formatCurrencyBRL(amount * currency).replace('R$', '');
        
        description.textContent = `${symbol}1 = ${formatCurrencyBRL(currency)}`;
        result.textContent = `${total} reais`;

        footer.classList.add('show-result');
    } catch(e) {
        footer.classList.remove('show-result');
    }
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