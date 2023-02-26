const willReverseTheCharacters = (characters = "reverse") => {
    //Separando as letras da string em caracteres separados
    const charactersArray = characters.split("");
    const reversedArray = [];
    
    //Utilizando o unshift para adicionar cada item do array original ao inicio de outro
    // Por exeplo: a primeira iteracao o novo array adiciona "r" ao comeco, depois "e", ficando ["e", "r"], 
    // e assim por diante ate inverter a posicao de todos os itens
    for(let i = 0; i < charactersArray.length; i++) {
        reversedArray.unshift(charactersArray[i]);
    }
    
    console.log('Array original: ', charactersArray);
    console.log('Array revertido: ', reversedArray);
}

willReverseTheCharacters();