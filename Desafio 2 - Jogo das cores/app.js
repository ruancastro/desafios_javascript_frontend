Randomize_monitor = () => {
    let rgbValues = Random_RGB_Generator()
    let rgb = document.querySelector(".cabecalho__monitor");
    rgb.innerHTML = `RGB(${rgbValues[0]},${rgbValues[1]},${rgbValues[2]})`;
    
    Randomize_colors()
}

Random_RGB_Generator = () => {
    let rgbValues = [parseInt(Math.random()*256),parseInt(Math.random()*256),parseInt(Math.random()*256)];
    return rgbValues;  
}

get_level = (value) => {
    let nivel = value
    
    switch(value){
        case 'easy': 
        nivel = 'Easy';
        break;

        case 'medium': 
        nivel = 'medium';
        break;

        case 'hard': 
        nivel = 'hard';
        break;

        default:  nivel = 'nenhum';
        break;

    }

    document.querySelector(".cor__1").innerHTML = nivel
}


Randomize_colors = () => { // jogando as cores de forma aleatória nos seis espaços
    for(let i=1; i<7; i++){
        let rgb = Random_RGB_Generator();
        document.querySelector(`.cor__${i}`).style.backgroundColor  = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
        console.log(rgb)
    }
}
