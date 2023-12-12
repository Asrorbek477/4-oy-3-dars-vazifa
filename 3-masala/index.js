// 3. 2 xonali son berilgan. Berilgan sonning o'nlar hamda birlar xonasidagi raqamlar ko'paytmasini topuvchi algoritm yozing.
function findProduct(number) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
  
    const product = ones * tens;
  
    return product;
  }
  
  const number = 54;
  const result = findProduct(number);
  console.log(result); 
  
  