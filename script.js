function calculateBudget(){

let income = document.getElementById("income").value;

if(income === "" || income <= 0){
document.getElementById("result").innerHTML = "Please enter a valid income.";
return;
}

income = Number(income);

let needs = income * 0.50;
let nonEssential = income * 0.30;
let savings = income * 0.20;

document.getElementById("result").innerHTML =
"<h3>Budget Breakdown</h3>" +
"<p>Essential Expenses (50%): " + needs.toFixed(0) + "</p>" +
"<p>Non-Essential Expenses (30%): " + nonEssential.toFixed(0) + "</p>" +
"<p>Savings (20%): " + savings.toFixed(0) + "</p>";

} 
