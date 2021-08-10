type amostraDeIdadesType = {
  numeros: number[],
  obterEstatisticas: Function
}

// a) entrada: array de numero | saída: objeto { maior: numero, menor: numero, media: numero }
// b) numerosOrdenados: number[] | soma: number | estatisticas: { maior: numero, menor: numero, media: numero }

//c)
const amostraDeIdades: amostraDeIdadesType = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros: number[]) => {
    const numerosOrdenados = numeros.sort(
      (a, b) => a - b
    )
  
    let soma = 0
  
    for (let num of numeros) {
      soma += num
    }
  
    const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
    }
  
    return estatisticas
  }
}