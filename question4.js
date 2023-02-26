const calculateBillingByStatePercentage = () => {
    const billingByState = [
        {"estado": "SP", "valor": 67836.43},
        {"estado": "RJ", "valor": 36678.66},
        {"estado": "MG", "valor": 29229.88},
        {"estado": "ES", "valor": 27165.48},
        {"estado": "Outros", "valor": 19849.53}
    ];
    
    // Percorre o array e soma os valore de cada estado para definir o valor de 100% de faturamento
    const monthlyAverage = billingByState.reduce((acc, sum) => {
        return acc + sum.valor;
    }, 0)
    
    console.log(`Media mensal: R$${monthlyAverage}`);

    // Iteracao para cada item do array para calcular um a um seu percentual de acordo com a media mensal
    for(let i = 0; i < billingByState.length; i++) {
        const statePercentage = billingByState[i].valor * 100 / monthlyAverage;

        console.log(`Porcentagem do estado ${billingByState[i].estado}: ${(statePercentage).toFixed(3)}% - valor: R$${billingByState[i].valor}}`);
    }
    
}

calculateBillingByStatePercentage();
