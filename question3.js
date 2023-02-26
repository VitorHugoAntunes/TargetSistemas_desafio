import {balance} from './data.js';

const calculateBalance = () => {
    let dailyValues = balance;
    let newDailyValues = dailyValues;

    // Percorre o array e retorna os dias com valor diferente de 0 (sem faturamento)
    for(let i = 0; i < dailyValues.length; i++) {
        newDailyValues = dailyValues.filter(value => value.valor !== 0);
    }

    console.log('Dias com faturamento: ', newDailyValues);
    
    // Percorre o array e retorna o menor valor
    const lowerValue = newDailyValues.reduce((previous, next) => {
        return previous.valor < next.valor ? previous : next;
    })

    // Percorre o array e retorna o maior valor
    const higherValue = newDailyValues.reduce((previous, next) => {
        return previous.valor > next.valor ? previous : next;
    }) 

    // Retorna a media mensal de faturamento
    const monthlyAverage = newDailyValues.reduce((accumulated, product) => {
        return accumulated + product.valor / newDailyValues.length;
    }, 0)

    // Percorre o array e retorna os dias com valor superior a media mensal
    const greaterThanMonthlyAverage = newDailyValues.filter(value => value.valor > monthlyAverage)

    console.log('Menor valor: ', lowerValue);
    console.log('Maior valor : ', higherValue);
    console.log('Media mensal : ', monthlyAverage)
    console.log('Dias do mes que o valor diario foi maior que a media mensal: ', greaterThanMonthlyAverage);
}

calculateBalance();