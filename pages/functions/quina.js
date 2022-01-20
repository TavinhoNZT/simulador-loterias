export function quina(qtde = 5, numeros = []) {
    qtde = +qtde
    if (qtde < 5 && qtde > 80) {
        throw "Quantidade Invalida!"
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 80) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return quina(qtde, [...numeros, numeroAleatorio])
    } else {
        return quina(qtde, numeros)
    }

}