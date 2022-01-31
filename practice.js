
// deggre cllcualution 
/*
var num = [95, 66, 88, 59, 47, 77];
var name = ['Alya', 'Dalya', 'saliya', 'Malya', 'lilya', ' jwalya'];

let i =0;

while (i <=5) {
    if (num[i] >= 90){
     console.log(name[i]+ " Got A+");
    }else if(num[i] >=80){
        console.log(name[i] + "got A-");
    }else if (num[i] >=70){
        console.log(name[i] + "Got B");
    
    }else if (num[i] >= 60) {
        console.log(name[i] + "Got C");
    }
    else if (num[i] >=50) {
        console.log(name[i] + "Got D");

    }else if (num[i] <50){
        console.log(name[i] + "falil!!!");
    }
    
    i++;



// amar nijer kora  like dgree bhir kora 


let numbar = [40,60,52,90,99,71];
let nam = ["rakib", "Taizul", "Sozib", "Ration", "Ekbal","rohoman",];

for(let i = 0; i <= numbar.length;i++){

    if(numbar[i] >= 40){

        console.log (nam[i] + "tui paichot chollish");
    }
    else if(numbar [i] >= 60){

        console.log (nam[i] + "tui paichot shat");


    }
   else if(numbar[i] >= 52){
        console.log (nam[i] + "tui paichot banno");
    }
    else if (numbar[i] >= 90) {
        console.log (nam[i] + "tui paichot nobboi");
    }
    else if (numbar[i] >= 71 ) {console.log(nam[i]+ "tui paichot akkarou")};
   
}}

// jor sonkha bahir kora loop diya 

for(var i =1;i <= 100;i++);{
    if ( i % 2 == 0 ){

        console.log(i);
    }


}
// bajor sonkha bahir kora 

for (let i = 50;i <= 80; i++) {
    if (i % 2== 1 ){
        console.log(i);
    }
}

// ek takhe 100 porjontw lekha 

let i = 0 ;
while(i <100 ){
    i++
        console.log(i);
    
}

// 3 numbar ar function 

function aumOfNumbers (num1, num2) {
 let result = num1 + num2;
 return result;

}

var rakib = 500;
var sharif = 50;
;
console.log(aumOfNumbers(rakib,sharif ));

// 3 numbar ar function 

function addthreeNumbers(number1,number2, number3,){
    let result = number1 + number2 + number3;
    return result;


}



let result = addthreeNumbers(20,50,60);

console.log(result);


// function use kore kosto mar k welcome bola 
function wellcomeCostumar(name){
  console.log( "Hello " + name + " Wellcome for comeing our shop")


}

var sosumarName = "Raib Hossain";

var costumarInfo = wellcomeCostumar(sosumarName);




function wellcomeCostumar(name){
  let costumarInfo = "Hello " + name + " Wellcome for comeing our shop"
  return costumarInfo

}

var sosumarName = "Raib Hossain";

var costumarInfo = wellcomeCostumar(sosumarName);

console.log(costumarInfo);
*/
// write a function for a food delivery servtce that sells 'pizza ' only .
//  this funtion kakes the food name & quantity as parameter and then return
//   a custom massage with order info this functio should be smart enough to
//    handle wrong parmetor inputs

// nizer kora moto kore kora 

// function foodpandaKuwait(foodname , pich){
//     var totalItem = 10 *pich
//     var massage = "sucssful order:<br> "+"food Name : " + foodname + " order item: " +pich +" total prich: "+totalItem ;
//     return massage 
    
//     }
//    console.log( foodpandaKuwait("pizza",3));


// practice with techor 
function pizzaPanda(foodname, quantity) {
    if (foodname.toLowerCase() != "pizza") {
        return "sorry , we are sell only Pizza.";

    }
    var price = 10 * quantity;
    var massage = "Order successful! , Order info: '" + foodname + " , Price; " + price + "$";
    return massage
}

console.log(pizzaPanda( "bargar" ,5 ) );
















