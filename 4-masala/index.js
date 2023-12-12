//  4. 2 xonali son berilgan. Berilgan sonning o'nalr xonasidagi son juft bo'lsa uning kvadratini aks holda kubini topuvchi algoritm yozing.    
function findPower(number) {
    const tens = Math.floor(number / 10) % 10;
  
    let result;
  
    if (tens % 2 === 0) {
      result = number ** 2; 
    } else {
      result = number ** 3; 
    }
  
    return result;
  }
  
  const number = 47;
  const result = findPower(number);
  console.log(result); 
  
  