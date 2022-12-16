const numero = [1, 2, 3, 4]
let [firstNum, secondNum, thirdNum, fourNum] = numero // desconstruindo o array
console.log(firstNum, secondNum, thirdNum, fourNum)

const habilidades = [
    ['HTML', 'CSS', 'JAVASCRIPT'],
    ['PHP', 'POSTGRESQL', 'JAVASCRIPT']
]
let [frontEnd, backEnd] = habilidades
console.log(frontEnd, backEnd) // outro exemplo de desconstrução

const numeroTwo = [1, 2, 3]
let [primeiroNum, , terceiroNum] = numeroTwo // se quiser pular um valor, deixe uma virgula só
console.log(primeiroNum, terceiroNum)

const nomes  = [undefined, 'Murillo', undefined, 'Vinícius']
let [
    firstNome = 'Letycia',
    secondNome,
    thirdNome = 'Gustavo', // podemos por valores padrão
    fourNome
] = nomes 
console.log(firstNome, secondNome, thirdNome, fourNome)

const numerosTree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...resto] = numerosTree
console.log(num1, num2, num3)
console.log(...resto) // atribuindo uma variavel ao resto com o operador [...]

const frutas = [['Maça', 'Vermelho'], ['Melancia', 'Verde'], ['Banana', 'Amarelo']]
for(const [fruta, cor] of frutas){
    console.log(fruta, cor)
} // desconstruindo com for

const fullstack = [
    ['HTML', 'CSS', 'JS', 'REACT'],
    ['MYSQL', 'APACHE', 'PHP', 'JS']
]
for([first, second, third] of fullstack){
    console.log(first, second, third)
}

// desustruturando objeto

const retangulo = {
    altura: 20,
    largura: 10,
    area: 200
}
let {altura, largura, area, perimetro = 60} = retangulo // atribuindo um valor padrão ao perimetro
console.log(altura, largura, area, perimetro)

const triangulo = {
    altura: 10,
    lados: 20,
    area: 30
}
let{altura: al, lados: l, area: ar, p} = triangulo // renomeando as chaves
console.log(al, l, ar, p)

const rectan = {
    alt: 20,
    larg: 10
}
const calcularPerimetro = ret => {
    return 2 * (ret.alt + ret.larg)
}
console.log(calcularPerimetro(rectan)) // obtendo outro parametro sem desestruturar

const calcularPer = ({alt, larg}) =>{
    return 2 * (alt + larg)
}
console.log(calcularPer(rectan)) // obtendo paramentro desestruturando

const questList = [
    {
        quest: 'form',
        time: '15/12/2022',
        completed: true
    },
    {
        quest: 'footer',
        time: '15/12/2022',
        completed: false
    },
    {
        quest: 'css',
        time: '15/12/2022',
        completed: false
    }
]
for(const {quest, time, completed} of questList){
    console.log(quest, time, completed)
} // outro exemplo

const par = [0, 2, 4, 6, 8]
const spreadPar = [...par]

const impar = [1, 3, 5, 7 , 9]
const spreadImpar = [...impar]

const numerosInteiros = [...par, ...impar]

console.log(spreadPar)
console.log(spreadImpar)
console.log(numerosInteiros.sort())


// copiando objeto com spread
const usuario = {
    nome:'Murillo',
    titulo:'Programador',
    pais:'Brasil',
    cidade: 'Jampa'
}

const copiarUsuario = {...usuario}
console.log(copiarUsuario) // copiando objeto

const copiarUsuario2 = {...usuario, title:'Lutador'} // modificando os valores durante a cópia
console.log(copiarUsuario2)


