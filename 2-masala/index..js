// 2.  4 ta son berilgan. Berilgan sonlar orasidan 3 ga yoki 7 ga karralilarining ko'paytmasini topuvchi algoritm yozing.
let num1 = 21;
let num2 = 14;
let num3 = 35;
let num4 = 39;

let sum = 1;

if (num1 % 3 == 0 || num1 % 7 == 0) {
    sum *= num1;
}

if (num2 % 3 == 0 || num2 % 7 == 0) {
    sum *= num2;
}

if (num3 % 3 == 0 || num3 % 7 == 0) {
    sum *= num3;
}
if (num4 % 3 == 0 || num4 % 7 == 0) {
    sum *= num4;
}

console.log(sum);