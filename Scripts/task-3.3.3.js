function calculator (number1, operator, number2){

    var result = " ";
switch (operator){
    
   

    case '+' :
        result = number1 + number2
        console.log( number1 + " + " + number2 + " = " + result )
        break;

     case '-' :
        result = number1 - number2
        console.log(number1 - number2)
        break;  

    case '*' :
        result = number1 * number2
            console.log(number1 * number2)
            break;

    case '/' :
        result = number1 / number2
        console.log(number1 / number2)
        break;

    case '%' :
        result = number1 % number2
        console.log(number1 % number2)
        break;

    default :
        console.log("ERROR")
        break;

}

}   