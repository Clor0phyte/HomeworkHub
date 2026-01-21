function Calculator() {
    let a = prompt("Enter first number:");
    let b = prompt("Enter second number:");
    let operation = prompt("Enter operation (+, -, *, /):");

    switch (operation){
        case "+":
            alert("Result:" + (Number(a) + Number(b)));
            break;
        case "-":
            alert("Result:" + (Number(a) - Number(b)));
            break;
        case "*":
            alert("Result:" + (Number(a) * Number(b)));
            break;
        case "/":
            if (b == 0) {
                alert("Error: Division by zero");
            } else {
                alert("Result:" + (Number(a) / Number(b)));
            }
            break;
        default:
            alert("Error: Invalid operation");
            break;
    }
    };

Calculator();