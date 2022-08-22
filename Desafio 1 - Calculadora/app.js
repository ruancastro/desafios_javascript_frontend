let calc = []
showMonitor = (op) => {
    document.querySelector('.calculator__monitor').innerHTML = ' '

    for(let i =  0; i<calc.length;i++){
        document.querySelector('.calculator__monitor').innerHTML += op[i]
    }

}

mapClick = (button) =>{   
    
    switch(button) {
        case 'x':
            calc.pop()
            break
    
        case '=':
            solve(calc)
            break

        case 'c':
            calc = []
            break

        default:
            calc.push(button)
            break

        
    }

    showMonitor(calc)

}


mapKey = (e) => {
    
for(let i = 0;i<=9;i++){
    switch(e.key) {
        case `${i}`:
            calc.push(i)
            break
    }
}

switch(e.key) {
    case `+`:
        calc.push('+')
            break
    case `-`:
        calc.push('-')
            break

    case `*`:
        calc.push('*')
            break
    case `/`:
        calc.push('/')
            break    
            
    case `Backspace`:
        calc.pop()
            break
    
    case `.`:
        calc.push('.')
            break            

    case `=`:
        solve(calc)

        break

    // case `Enter`:
    //     solve(calc)
    //     break
}

    showMonitor(calc)
}


solve = (list) => {
    let eq = list.join('')
    res = eval(eq)
     calc = [res]
    
     if(isFloat(calc)){
        calc = calc[0].toFixed(2)
    }
    showMonitor(calc)

}

function isFloat(n){
    return Number(n[0]) === n[0]&& n[0] % 1 !== 0;
}

