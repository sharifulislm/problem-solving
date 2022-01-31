function coffeeShop(foodname,itemName,quantity) {
    if (foodname.toLowerCase() != "coffee") {
        return "sorry , we are sell only Pizza.";

    }
    // if coffee don't have use this massge 
//     if (quantity >= 10){
//    return "sorry , only 10 coffee"
//     }
    var price = 2 * quantity;
    var massage = "Order successful! , Order info: '" + foodname + " Item Name : "+ itemName + " , Price; " + price + "KD";
    return massage
}

console.log(coffeeShop("coffee" ,"torksh coffe", 9 ) );
