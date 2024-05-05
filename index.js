#!/usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    INR: 74.57,
    GBP: 0.76,
    EUR: 0.91,
    PKR: 280,
};
let user_answere = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from currency',
        type: 'list',
        choices: ['USD', 'INR', 'GBP', 'EUR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['USD', 'INR', 'GBP', 'EUR', 'PKR']
    },
    {
        name: 'Amount',
        message: 'Enter your amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answere.from];
let toAmount = currency[user_answere.to];
let amount = user_answere.Amount;
let baseCurrency = amount / fromAmount;
let covertCurrency = baseCurrency * toAmount;
console.log(covertCurrency);
