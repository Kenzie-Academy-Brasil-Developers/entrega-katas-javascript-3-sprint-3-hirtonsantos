function showResults (teste) 
    {
    const lista = document.createElement('ul');
    const item1 = document.createElement('li');
    item1.innerHTML += teste;
    lista.appendChild(item1);
    conteudo.appendChild(lista);
}

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {
    let number = []
    for (let i = 1; i <= 25; i++){
        number.push(i)
    }
    return number
}
showResults(kata1())


function kata2() {
    let number = []
    for (let i = 25; i >= 1; i--) {
        number.push(i)
    }
    return number
}
showResults (kata2())


function kata3() {
    let number = []
    for (let i = -1; i >= -25; i--) {
        number.push(i)
    }
    return number
}
showResults (kata3())

function kata4() {
    let number = []
    for (let i = -25; i <= -1; i++) {
        number.push(i)
    }
    return number
}
showResults (kata4())

function kata5() {
    let number = []
    for (let i = 25; i >= -25; i--){
        if (i%2 !==0) {
            number.push(i)
        }
    }
    return number
}
showResults (kata5())



function kata6() {
    let number = []
    for (let i = 1; i <= 100; i++) {
        let divisivel = i%3 === 0
        if (divisivel){
            number.push(i)
        }
    }
    return number
}
showResults (kata6())


function kata7() {
    let number = []
    for (let i = 1; i <= 100; i++) {
        let divisivel = i%7 === 0
        if (divisivel){
            number.push(i)
        }
    }
    return number
}
showResults (kata7())

function kata8() {
    let number = []
    for (let i = 100; i > 0; i--) {
        let divisivel = i%3 === 0 || i%7 === 0
        if (divisivel) {
            number.push(i)
        }
    } 
    return number
}
showResults (kata8())


function kata9() {
    let number = []
    for (let i = 1; i < 100; i++) {
        let imparAndDivisivel = i%5 === 0 & i%2 !== 0
        if (imparAndDivisivel) {
            number.push(i)
        }
    }
    return number
}
showResults (kata9())



function kata10() {
    let number = []
    for (let i = 0; i < sampleArray.length; i++){
        number.push(sampleArray[i])
    }
    return number
}
showResults (kata10())



function kata11() {
    let number = []
    for (i = 0; i < sampleArray.length; i++) {
        let par = sampleArray[i]%2 == 0
        if (par) {
            number.push(sampleArray[i])
        }
    }
    return number
}
showResults (kata11())



function kata12() {
    let number = []
    for (let i = 0; i < sampleArray.length; i++) {
        let impar = sampleArray[i]%2 !== 0
        if (impar) {
            number.push(sampleArray[i]) 
        }
    }
    return number
}
showResults (kata12())




function kata13() {
    let number = []
    for (let i = 0; i < sampleArray.length; i++) {
        let divivelEight = sampleArray[i]%8 === 0 
        if (divivelEight) {
            number.push(sampleArray[i])
        }
    }
    return number
}
showResults (kata13())


function kata14() {
    let number = []
    for (let i = 0; i < sampleArray.length; i++) {
        let quadrado = sampleArray[i] * sampleArray[i]
        number.push(quadrado)
    }
    return number
}
showResults (kata14())


function kata15() {
    let number = []
    let soma = 0
    for (let i = 1; i <= 20; i++) {
        soma += i
    }
    return soma
}
showResults (kata15())


function kata16() {
    let number = []
    let soma = 0
    for (let i = 0; i < sampleArray.length; i++) {
        soma = soma + sampleArray[i]
        number.push(soma)
    } 
    return soma
}
showResults (kata16())



function kata17() {
    let number = []
    let menor = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++) {
        if (sampleArray[i] < menor) {
            menor = sampleArray[i]
            number.push(sampleArray[i])
        }
    }
    return menor
}
showResults (kata17())




function kata18() {
    let number = []
    let maior = sampleArray[0]
    for (let i = 1; i < sampleArray.length; i++) {
        if (sampleArray[i] > maior) {
            maior = sampleArray[i]
            number.push(sampleArray[i])
        }
    }
    return maior
}
showResults (kata18())




/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
/*
function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
*/