let number1Divisor = 0;
let number2Divisor = 0;

function findFriendlyNumber(number1, number2) {
  for (let i = 0; i < number1; i++) {
    if (number1 % i == 0) {
      number1Divisor += i;
    }
  }

  for (let j = 0; j < number2; j++) {
    if (number2 % j == 0) {
      number2Divisor += j;
    }
  }

  if ((number1Divisor == number2) & (number2Divisor == number1)) {
    console.log("Girilen değerler arkadaş sayı");
  } else {
    console.log("Girilen değerler arkadaş sayı değil.");
  }
}

findFriendlyNumber(220, 284);
findFriendlyNumber(300, 150);
