// Funções

function sum(a, b){ //função nomeada
    return a + b
}

console.log(sum(1,2)) // 3

const value = sum(4.5, 10.5)

console.log(value) // 15

const sum2 = function(a, b){ // função anônima
    return a + b
}

console.log(sum2(2,3)) //5

// Arrow function

const sum3 = (a,b) => {
    return a + b
}

console.log(sum3(3,5)) // 8

const sum4 = (a,b) => a + b

console.log(sum4(4,5)) // 9

const greeting =((name) => `Hi, ${name}, what's up?`)
console.log(greeting('Gabi'))

const greeting2 = (name => `Hi, ${name}, what's up?`) // 1 argumento
console.log(greeting2('Gabi'))

const olaMundo = () => 'Olá mundo!' // Sem argumento

console.log(olaMundo())

// Condicionais

let entregueSemBugs = false

if (entregueSemBugs){
    console.log('YAY!')
}else {
    console.log('Shame!')
}

function avaliaSprint(entregueSemBugs){
    if (entregueSemBugs){
        console.log('YAY!')
    }else {
        console.log('Shame!')
    }
}

avaliaSprint(entregueSemBugs)

// Live time -> 33:13