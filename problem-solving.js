function pizzaPanda(foodname, quantity) {
    if (foodname.toLowerCase() != "pizza") {
        return "sorry , we are sell only Pizza.";

    }
    var price = 10 * quantity;
    var massage = "Order successful! , Order info: '" + foodname + " , Price; " + price + "$";
    return massage
}

console.log(pizzaPanda( "pizza" ,5 ) );
