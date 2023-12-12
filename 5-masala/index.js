//  5. 3 xonali son berilgan. Uning o'nlar hamda yuzlar xonasidagi sonlarni topuvchi algoritm yozing.
function findDigits(number) {
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
  
    return {
      hundreds: hundreds,
      tens: tens
    };
  }
  
  const number = 358;
  const result = findDigits(number);
  console.log(result); 
  
  