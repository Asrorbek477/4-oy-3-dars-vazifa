// 6. 3 xonali son berilgan. Uning toq raqamlari ko'paytmasini topuvchi algoritm yozing.
function findProductOfOdds(number) {
    let product = 1;
    const digits = number.toString().split("");
  
    for (let i = 0; i < digits.length; i++) {
      const digit = parseInt(digits[i]);
  
      if (digit % 2 !== 0) {
        product *= digit;
      }
    }
  
    return product;
  }
  
  const number = 381;
  const result = findProductOfOdds(number);
  console.log(result); 
  
  