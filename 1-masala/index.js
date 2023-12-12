// 1-misol.  3 ta son berilgan. Berilgan sonlar orasidan juft hamda 5 ga karralilarini ko'paytmasini topuvchi algoritm yozing.
let num1 = 15;
let num2 = 4;
let num3 = 20;

let sum = 1;

if (num1 % 2 == 0 && num1 % 5 == 0) {
    sum = sum * num1;
}

if (num2 % 2 == 0 && num2 % 5 == 0) {
    sum = sum * num2;
}

if (num3 % 2 == 0 && num3 % 5 == 0) {
    sum = sum * num3;
}

console.log(sum)

  
  