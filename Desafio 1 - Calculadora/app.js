let calc = []
showMonitor = () => {
    document.querySelector('.calculator__monitor').innerHTML = ' '

    for(let i =  0; i<calc.length;i++){
        document.querySelector('.calculator__monitor').innerHTML += calc[i]
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

    console.log("EVENTO: ",e)

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

    case `=`:
        solve(calc)
        break
}

    showMonitor(calc)

    console.log(e)
    console.log(calc)
    
}


solve = (list) => {
    let eq = list.join('')
    res = eval(eq)

    calc = [eq,'=',res]
    showMonitor()
}

showRes = (res) =>{
    document.querySelector('.calculator__monitor').innerHTML += res
    console.log(res)
}

