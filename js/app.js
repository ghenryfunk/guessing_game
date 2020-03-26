'use strict';

var name = prompt("Hello, what is your name?")
alert("Welcome " + name + ", this is my \'About Me\' webpage")

var q1 = prompt("Hello " + name + " do you like to code? Please enter either \'yes\' or \'no\' or \'y\' or \'n\'");
var q1_norm = q1.toLowerCase()
if ((q1_norm === "y" ) || (q1_norm === "n")||(q1_norm === "yes")||(q1_norm === "no")){
    //console.log(q1_norm);
    alert("thank you for your response of : " + q1_norm);
} else{
    //console.log(q1 + " is an unacceptable response.");
    alert(q1 + " is an unacceptable response, goodbye!");
    end;
}

var q2 = prompt("Hello " + name + " do you like to apples? Please enter either \'Y\' or \'N\'");
var q2_norm = q2.toLowerCase()
if ((q2_norm === "y" ) || (q2_norm === "n")||(q2_norm === "yes")||(q2_norm === "no")){
    //console.log(q2_norm);
    alert(q2_norm + " is an acceptable response");
} else{
    //console.log(q2 + " is an unacceptable response.");
    alert(q2 + " is an unacceptable response, goodbye!");
    end;
}

var q3 = prompt("Hello " + name + " do you like to Pina Coladas? Please enter either \'Y\' or \'N\'");
var q3_norm = q3.toUpperCase()
if ((q3_norm === "y" ) || (q3_norm === "n")||(q3_norm === "yes")||(q3_norm === "no")){
    //console.log(q3_norm);
    alert(q3_norm + " is an acceptable response");
} else{
    //console.log(q3 + " is an unacceptable response.");
    alert(q3 + " is an unacceptable response, goodbye!");
}

var q4 = prompt("Hello " + name + " do you like to Pina Coladas? Please enter either \'Y\' or \'N\'");
var q4_norm = q4.toLowerCase()
if ((q4_norm === "y" ) || (q4_norm === "n")||(q4_norm === "yes")||(q4_norm === "no")){
    //console.log(q4_norm);
    alert(q4_norm + " is an acceptable response");
} else{
    //console.log(q4 + " is an unacceptable response.");
    alert(q4 + " is an unacceptable response, goodbye!");
}

var q5 = prompt("Hello " + name + " do you like to play golf? Please enter either \'Y\' or \'N\'");
var q5_norm = q5.toLowerCase()
if ((q5_norm === "y" ) || (q5_norm === "n")||(q5_norm === "yes")||(q5_norm === "no")){
    //console.log(q5_norm);
    alert(q5_norm + " is an acceptable response");
} else{
    //console.log(q5 + " is an unacceptable response.");
    alert(q5 + " is an unacceptable response, goodbye!");

}
alert("Thank you " + name + ", your responses are much appreciated!")