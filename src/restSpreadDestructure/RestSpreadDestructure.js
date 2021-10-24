
//Rest-Geriye kalan/kalanlar
let showProducts=function (id,...products) {
    console.log(id)
    console.log(products)
}
//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])


//Spread-Ayrıştırmak


let points = [1,2,3,4,50,4,60,14]

console.log(...points)
console.log(Math.max(...points))


//Destructuring-Elimizde ki array in değerlerini değişkenlere atamak.


let populations=[10000,20000,30000,[4000,1000]]
let [small,medium,high,[veryHigh,maximum]] = populations 
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)