function addToCart(productName) {
  console.log("sepete eklendi." + productName);
}

addToCart("elma");
addToCart("Yumurta");
addToCart("Karpuz");

let sayHello = () => {
  console.log("Hello World");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2");
};

sayHello2();

function addToCart2(productName, quantity, unitPrice) {}

addToCart2("Elma", 5, 10);
addToCart2("Armut", 3, 15);
addToCart2("Limon", 3, 15);

let product1 = {
  productName: "Elma",
  unitPrice: "10",
  quantity: "505",
};

function addToCart3(product) {
  console.log("Ürün: " + product.productName);
  console.log("Adet: " + product.quantity);
  console.log("Fiyat: " + product.unitPrice);
}

addToCart3(product1);

function addToCart4(x) {
  console.log(x);
}

let products = [
  { productName: "Elma", unitPrice: "10", quantity: "505" },
  { productName: "Armut", unitPrice: "10", quantity: "505" },
  { productName: "Karpuza", unitPrice: "10", quantity: "505" },
];

addToCart4(products);

function add(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
 // console.log(total)
 // console.log(bisey)
}

add(20, 30);
//add(20, 30, 40);
//add(20, 30, 40, 50);

let numbers= [10,20,100,800] //Apiden geldiğini varsayalım.

//console.log(Math.max(...numbers))//Spread yaptık 3 nokta ile

let [icAnadolu,marmara] = [
   
    {name:"İç Anadolu", population:"20M"},
    
    {name:"Marmara", population:"30M"},
    
    {name:"Karadeniz", population:"10M"}
]


console.log(icAnadolu);
console.log(marmara);