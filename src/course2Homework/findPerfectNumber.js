function findPerfectNumber() {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j == 0) {
        sum += j;
      }
    }
    if (i == sum) {
      console.log(i);
    }
    sum = 0;
  }
}
findPerfectNumber();
