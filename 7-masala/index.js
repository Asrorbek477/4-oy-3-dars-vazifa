// 7. 4 xonali son berilgan. Uning juft raqamlari sonini topuvchi algoritm yozing.
function countEvenDigits(number) {
    const digits = number.toString().split("");
    let count = 0;
  
    for (let i = 0; i < digits.length; i++) {
      const digit = parseInt(digits[i]);
  
      if (digit % 2 === 0) {
        count += 1;
      }
    }
  
    return count;
  }
  
  const number = 4567;
  const result = countEvenDigits(number);
  console.log(result); 
  
  