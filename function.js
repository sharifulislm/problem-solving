
function bringSingra(taka) {
    console.log('singra er jonno dise', taka);
    console.log('mama Singra den');
    var singaraPrice = 10;
    var singraQuantity = taka / singaraPrice;
    return singraQuantity;
}
var money = 250;
var singra = bringSingra(money);
console.log('this is your singra ', singra);


function getFactorial(numbar) {
    let ammajan = 1;
    let i = 1;
    while(i <=numbar){
   ammajan = ammajan * i;
   i++ 

    }
    return ammajan
}
const inputnamar = 6;
var ammajan = getFactorial(inputnamar);

console.log(ammajan);