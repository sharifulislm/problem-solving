// function getFactorial(numbar){
//     let factorial = 1;
    
//     let i = 1;
//     while(i <= numbar){
//      factorial = factorial * i;
//         i++
//     }
//     return factorial;
// }

// const myFactorial = getFactorial(8);
// console.log("this is your factorial numbar - ", myFactorial);

    //  let i = 0;
    // while(i <= 10){
    //     i++
    //     console.log(i);
    // }
 
    // for (let step = 0; step <=5; step++) {
    //     // Runs 5 times, with values of step 0 through 4.
    //     console.log(step);
    //   }

    function getRezalt(numbar) {
        var rezaltNumbar = 1;
     for (var i = numbar; i >= 1; i--){
        rezaltNumbar = rezaltNumbar * i;
      

     }
      
       
        return rezaltNumbar;
        
    }
    var inputNumbar = 10;
    var rezaltNumbar = getRezalt(inputNumbar);

    console.log(rezaltNumbar);