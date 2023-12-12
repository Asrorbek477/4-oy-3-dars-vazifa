//  8. Sizga tog'ri to'tburchakning tomonlari a va b beriladi, siz uning yuzasi va perimetrini topib quyidagi shartga tekshirishingiz kerak bo'ladi.Agar yuzasi perimetridan katta bo'lsa yuzasini aks holda perimetrini chiqaring.
function calculateRectangle(a, b) {
    const surfaceArea = a * b;
    const perimeter = 2 * (a + b);
  
    const condition = (surfaceArea > perimeter) ? "Surface area is greater than perimeter" : "Surface area is not greater than perimeter";
  
    return {
      surfaceArea: surfaceArea,
      perimeter: perimeter,
      condition: condition
    };
  }
  
  const a = 5;
  const b = 7;
  const result = calculateRectangle(a, b);
  console.log(result.surfaceArea); 
  console.log(result.perimeter); 
  console.log(result.condition); 
  
  