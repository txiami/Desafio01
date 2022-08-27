
function resposta(){
    // declarando variaveis
    const inputLado01 = document.querySelector("#lado-01").value
    const inputLado02 = document.querySelector("#lado-02").value
    const inputLado03 = document.querySelector("#lado-03").value
    let dadosVerificados = false
    // validação de dados
    if(inputLado01 > 0 && inputLado02 > 0 && inputLado03 > 0){
        dadosVerificados = true
    }

    // definindo triangulo
    if(dadosVerificados){

        if(inputLado01 == inputLado02 && inputLado02 == inputLado03 ){
            alert('Esse é um triangulo Equilátero')
        }else 
        if(inputLado01 == inputLado02 || inputLado02 == inputLado03 || inputLado01 == inputLado03){
            alert('Esse é um triangulo Isósceles')
        }

        if(inputLado01 != inputLado02 && inputLado01 != inputLado03 && inputLado02 != inputLado03){
            alert('Esse é um triangulo Escaleno')
        }

        
    }else{alert('Algum erro na digitação dos dados, verifique e tente novamente')}

    
}
