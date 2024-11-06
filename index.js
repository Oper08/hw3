let age = prompt("Жасыңызды енгізіңіз: ");
let isStudent = prompt("Сіз студентсіз бе? Иә/Жоқ") === "Иә";

let discountEligible = (age > 65 || isStudent);
console.log(discountEligible);

let number = prompt("Сан енгізіңіз:");
let isInRange = (number >= 10 && number <= 20);
console.log(isInRange);

let num1 = prompt("Бірінші санды енгізіңіз:");
let num2 = prompt("Екінші санды енгізіңіз:");

let oneIsNegative = (num1 < 0 && num2 >= 0) || (num1 >= 0 && num2 < 0);
console.log(oneIsNegative);
