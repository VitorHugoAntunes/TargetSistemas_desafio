// Primeiro parametro = tamanho da sequencia
// Segundo parametro = numero para ser encontrado
const fibonacci = (n, numberToFind) => {
    // Numeros iniciais da sequencia
    const sequence = [0, 1];

    // Loop que determina os proximos numberos da sequencia e adiciona no array
    for (let i = 2; i < n; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }

    // Numero a ser verificado se existe na sequencia
    let find = sequence.includes(numberToFind);
    
    //Logica se achou ou nao o numero
    if(find === false) {
        console.log(`O numero ${numberToFind} nao faz parte da sequencia ${sequence}`);
    } else if (find === true) {
        console.log(`O numero ${numberToFind} faz parte da sequencia ${sequence}`)
    }

    return sequence;
}


console.log(fibonacci(10, 5))