export function lotofacil(qtde = 15, numeros = []) {
    qtde = +qtde
    if (qtde < 15 && qtde > 25) {
        throw "Quantidade Invalida!"
    }

    if (numeros.length === qtde) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 25) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return lotofacil(qtde, [...numeros, numeroAleatorio])
    } else {
        return lotofacil(qtde, numeros)
    }

}