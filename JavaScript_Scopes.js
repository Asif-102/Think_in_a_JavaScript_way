"use strict" // use strict used for stop naming conflict

var x = 23; // this is window.x

function myFunc(){
    var x = 10; // this is myFunc.x
    // x = 10 <= this is also change global variable and this is highly risky
    console.log(x, 'from myFunc()');
}

myFunc();

console.log(x);