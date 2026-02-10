let income = prompt("enter your income")
let rent = prompt("enter rent cost")
let food = prompt("enter food spendings:")
let transport = prompt("enter transport spendings")
let entertaiment = prompt("enter entertaiment cost")

let TotalExpenses = Number(rent) + Number(food) + Number(transport) + Number(entertaiment)      

let savings = income - TotalExpenses
console.log(TotalExpenses)

if (savings > 0){
    console.log("У вас залишилися гроші")
}

else if (savings == 0) {
    console.log("Ви витратили все")
}

else if (savings < 0){
    console.log("Ви в мінусі!")
}
