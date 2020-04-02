'use strict';
// declare variable to track overall correct answers
var overall = 0

var name = prompt("Hello, what is your name?");
alert("Welcome " + name + ", this is my \'About Me\' webpage");

function q1() {
    var q1 = prompt("Hello " + name + ", do you know if James likes to code? Please enter either yes/no or y/n");
    var q1_norm = q1.toLowerCase()
    if ((q1_norm === "y" ) || (q1_norm === "n")||(q1_norm === "yes")||(q1_norm === "no")){
        //console.log(q1_norm);
        alert("thank you for your response of : " + q1_norm);
    } else{
        //console.log(q1 + " is an unacceptable response.");
        alert(q1 + " is an unacceptable response, goodbye!");
        end;
    }
}
var question1 = q1();

function q2() {
    var q2 = prompt("Hello " + name + ", does James have kids? Please enter either yes/no or y/n");
    var q2_norm = q2.toLowerCase()
    if ((q2_norm === "y" ) || (q2_norm === "n")||(q2_norm === "yes")||(q2_norm === "no")){
        //console.log(q2_norm);
        alert(q2_norm + " is an acceptable response");
    } else{
        //console.log(q2 + " is an unacceptable response.");
        alert(q2 + " is an unacceptable response, goodbye!");
        end;
    }
}
var question2 = q2();

function q3() {
    var q3 = prompt("Hello " + name + ", does James live in Seattle? Please enter either yes/no or y/n");
    var q3_norm = q3.toLowerCase()
    if ((q3_norm === "y" ) || (q3_norm === "n")||(q3_norm === "yes")||(q3_norm === "no")){
        //console.log(q3_norm);
        alert(q3_norm + " is an acceptable response");
    } else{
        //console.log(q3 + " is an unacceptable response.");
        alert(q3 + " is an unacceptable response, goodbye!");
        end;
    }
}
var question3 = q3();

function q4() {
    var q4 = prompt("Hello " + name + ", does James have any allergies? Please enter either yes/no or y/n");
    var q4_norm = q4.toLowerCase()
    if ((q4_norm === "y" ) || (q4_norm === "n")||(q4_norm === "yes")||(q4_norm === "no")){
        //console.log(q4_norm);
        alert(q4_norm + " is an acceptable response");
    } else{
        //console.log(q4 + " is an unacceptable response.");
        alert(q4 + " is an unacceptable response, goodbye!");
        end;
    }
}
var question4 = q4();

function q5() {
    var q5 = prompt("Hello " + name + ", does James work at Amazon? Please enter either yes/no or y/n");
    var q5_norm = q5.toLowerCase()
    if ((q5_norm === "y" ) || (q5_norm === "n")||(q5_norm === "yes")||(q5_norm === "no")){
        //console.log(q5_norm);
        alert(q5_norm + " is an acceptable response");
    } else{
        //console.log(q5 + " is an unacceptable response.");
        alert(q5 + " is an unacceptable response, goodbye!");
        end;
    }
}
var question5 = q5();


//loop with 4 tries only to guess a number

//set answer
var answer = 10;

for (var i = 0; i<4; i++){
    var guess = prompt("Hello " + name + ", please guess the number 1-10 that I am thinking of?");
        
    //correct guess
    if (guess == answer){
    alert("Great guess, that is correct!");
    overall++
    break

    //not correct guess- too high
    }else if (guess > answer){ 
    alert("Nice guess, but that guess is too high, please try again");
    
    //not correct guess -too low
    }else 
    alert("Nice guess, but that guess too low, please try again");
   
}
//if max guesses are exceeded, output msg and correct answer:
if (guess != answer){
alert("Sorry, you have exceeded the max number of guesses, the number I was thinking of was " + answer);
}else {
}

//loop with 6 tries to guess multiple correct answers

//declare possible correct answers in array
var correct = ["Seattle", "Ann Arbor", "Washington DC"];


for (var a = 0; a<6; a++){
    var cities = prompt("Hello " + name + ", please guess one of the different cities that I have lived in the last 10 years?");
    console.log(cities)
    console.log(a);
    var index = 0;

    // while loop that iterates through every possible correct answers
    while (index < correct.length){
        //for loop that does the compares input to possible correct answer
        for (var i =0; i<3; i++){   
        console.log("i " + i )
        //comparison logic 
        if (cities === correct[i]){
            console.log("correct answer")
            alert("Great guess, that is correct!");
            //if input is correct, "index" set to 4 to exit out of iterating through correct answers, "a" set to 6 to stop from asking for anymore guesses
            overall++
            index = 4
            a = 6
            break ;
            
            //if input is incorrect, check to see if all possible correct answers has been compared, if not ask user to try again
            } else {
                if (i==2){
                alert ("Sorry try again")
                break;
                } else{
                    }    
                index = 4
                } 
        }       
    }   
}



// calculate the number of correct answers out of the seven questions asked
if ((q1_norm === "yes") || (q1_norm === "y")){
    overall++  
}
if ((q2_norm === "yes") || (q2_norm === "y")){
    overall++  
}
if ((q3_norm === "yes") || (q3_norm === "y")){
    overall++  
}
if ((q4_norm === "no") || (q4_norm === "n")){
    overall++  
}
if ((q5_norm === "yes") || (q5_norm === "y")){
    overall++  
}

if((cities === "Seattle") || (cities === "Ann Arbor") || (cities === "Washington DC")){
    alert("Thank you " + name + ", for your responses and playing the guessing games! You got " + overall + " questions right!");
}else {
        alert("Sorry, you have exceeded the max number of guesses, the possibles answers were: " + correct[0]+ ", " + correct[1] + ", " + correct[2])
        alert("Thank you " + name + " for your responses and playing the guessing games! You got " + overall + " questions right!");
    }

