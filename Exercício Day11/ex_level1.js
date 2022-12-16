const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

console.log('======OUTRA QUESTÃO=====')

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

console.log('======OUTRA QUESTÃO=====')

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  
let {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)