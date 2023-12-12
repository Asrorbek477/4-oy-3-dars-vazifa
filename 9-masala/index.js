//  9. 5 xonali son berilgan. Berilgan sondagi nollar sonini topuvchi algoritm yozing.
function countZeros(number) {
    const digits = number.toString().split("");
    let count = 0;
  
    for (let i = 0; i < digits.length; i++) {
      if (digits[i] === "0") {
        count += 1;
      }
    }
  
    return count;
  }
  
  const number = 40950;
  const result = countZeros(number);
  console.log(result); 
  
  