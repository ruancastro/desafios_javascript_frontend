let drawPosition; // valor da posição que a cor escolhida irá ficar (será preenchido aleatoriamente)
let drawRgb;
let nivel; // o indice o qual a dica será posicionada
let gameStatus = false // o game já ta on?

Random_RGB_Generator = () => { // Retorna um array com 3 elementos entre 0 e 255
    let rgbValues = [parseInt(Math.random()*256),parseInt(Math.random()*256),parseInt(Math.random()*256)];
    return rgbValues;  
}


show_monitor = (rgbValue) => { // Gerando e colocando na tela, de forma aleatória, o RGB que deverá ser descoberto

    // var rgbValue = drawRgb

    let rgbMonitor = document.querySelector(".cabecalho__monitor");
    rgbMonitor.innerHTML = `RGB(${rgbValue[0]},${rgbValue[1]},${rgbValue[2]})`;
    
    // Randomize_colors(rgbValue) // jogando as cores de forma aleatória nos seis espaços

}

stringComplete = (valor) => { // configura as strings com dica no primeiro elemento 
    let rgb = []

    for(let i in valor){
        rgb.push(valor[i].toString())
    }
    
    
    for(let i in rgb){  
  
        if(i==0) {
            let tamanho = rgb[i].length;

            if(tamanho == 2){
                let substring = rgb[i].slice(0,1)
                substring += '*'

                rgb[i] = substring

            } else if (tamanho == 3){
                let substring = rgb[i].slice(0,1)
                substring += '**'
                rgb[i] = substring

            }

        } else if (i != 0) {
            rgb[i] = rgb[i].replace(rgb[i],'***')
         }
    }

    return (rgb)
}

removeNivelAtivo = () => {
    document.querySelector('.menu__botao:nth-child(2)').classList.remove('nivel_ativo');
    document.querySelector('.menu__botao:nth-child(3)').classList.remove('nivel_ativo');
    document.querySelector('.menu__botao:nth-child(4)').classList.remove('nivel_ativo');
}

get_level = (nivelDoJogo = 'easy') => {
    var level = nivelDoJogo;
    nivel = nivelDoJogo;
    let stringHidden = ['***','***','***'];
   
    var choice = (parseInt(Math.random()*6 + 1)) // gerando um valor aleatório entre 1 e 6
    choicePosition = choice

    let rgbLevelBased = { 
        'nivel': nivel,
        'colors': [],
        'strings':[],
    }
    
    if(nivel == 'easy'){  
        removeNivelAtivo ();
        document.querySelector('.menu__botao:nth-child(2)').classList.add('nivel_ativo')
       
            for(let i=0;i<6;i++){
                rgbLevelBased.colors[i] = Random_RGB_Generator();
                rgbLevelBased.strings[i] = stringComplete(rgbLevelBased.colors[i])
            }

            return rgbLevelBased
        
    }


    if(nivel == 'medium'){
        removeNivelAtivo ();
        document.querySelector('.menu__botao:nth-child(3)').classList.add('nivel_ativo') 
        
        

        for(let i=0;i<6;i++){
            rgbLevelBased.colors[i] = Random_RGB_Generator();
            rgbLevelBased.strings[i] = stringHidden
        }

        return rgbLevelBased;
    }


    if(nivel == 'hard'){

        function randSumSub(a,b,c) {
            let valorFinal = [];
            let s = 110; //valor base de aleatoriedade

            if (Math.random() <= 0.5) {
              valorFinal[0] = a - parseInt(Math.random()*s);
            } else {
              valorFinal[0] = a + parseInt(Math.random()*s);
            }

            if (Math.random() <= 0.5) {
                valorFinal[1] = b - parseInt(Math.random()*s);
              } else {
                valorFinal[1] = b + parseInt(Math.random()*s);
              }

              if (Math.random() <= 0.5) {
                valorFinal[2] = c - parseInt(Math.random()*s);
              } else {
                valorFinal[2] = c + parseInt(Math.random()*s);
              }              
            
            for(let i in valorFinal){
                if(valorFinal[i]> 255) {
                    valorFinal[i] = 255;
                  } else if( valorFinal[i] < 0) {
                    valorFinal[i] = 0
                  }

            }
            return valorFinal;
          }
          

        removeNivelAtivo ();
        document.querySelector('.menu__botao:nth-child(4)').classList.add('nivel_ativo') 
        


        rgbLevelBased.colors[0] = Random_RGB_Generator();
        rgbLevelBased.strings[0] = stringHidden;
        let randomColor = []

        for(let i=1;i<6;i++){
                rgbLevelBased.colors[i] = randSumSub(rgbLevelBased.colors[0][0],rgbLevelBased.colors[0][1],rgbLevelBased.colors[0][2])
                rgbLevelBased.strings[i] = stringHidden;

        }

        return rgbLevelBased

    }
}



Randomize_colors = () => { // jogando as cores de forma aleatória nos seis espaços
    gameStatus = true;

    let rgbObject = get_level(nivel);
    var choice = (parseInt(Math.random()*5 + 1)) // gerando um valor aleatório entre 1 e 6
    drawPosition = choice
    show_monitor(rgbObject.colors[choice])

    

    // console.log(rgbObject)

        for(let i=0; i<6; i++){
        if(i == choice){
            document.querySelector(`.cor__${i}`).style.backgroundColor  = `rgb(${rgbObject.colors[i][0]},${rgbObject.colors[i][1]},${rgbObject.colors[i][2]})`;
            document.querySelector(`.cor__${i}`).innerHTML  = `rgb(${rgbObject.strings[i][0]},${rgbObject.strings[i][1]},${rgbObject.strings[i][2]})`;  // texto dentro da div cor__i
            // document.querySelector('.cabecalho__title--2').innerHTML = choice // retirar linha quando o código tiver pronto 
        } 
        else {
            document.querySelector(`.cor__${i}`).style.backgroundColor  = `rgb(${rgbObject.colors[i][0]},${rgbObject.colors[i][1]},${rgbObject.colors[i][2]})`;
            document.querySelector(`.cor__${i}`).innerHTML  = `rgb(${rgbObject.strings[i][0]},${rgbObject.strings[i][1]},${rgbObject.strings[i][2]})`;  // texto dentro da div cor__i
        }
    }
       
    }


guess = (value) => {
    if(gameStatus){
        if(value == drawPosition){
            alert('correto')
            } else {
                alert('errado')
            }    
    } else {
        alert('Selecione o nível e clique em "New colors" para iniciar o jogo!')
    }
}

