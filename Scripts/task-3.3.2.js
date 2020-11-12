function drinkOrder( drink, size ){
switch( drink ) {  
    case 'cola' :
        console.log( "You have ordered a " + size + " " + drink )
        break;

    case 'lemonade':
        console.log( "You have ordered a " + size + " " + drink )
            break;

    case 'orangeade':
        console.log( "You have ordered a " + size + " " + drink )
                break;

    default:
        console.log( "This drink does not exist" )
        break;
}
}
