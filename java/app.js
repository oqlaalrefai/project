

"use strict";
let score= 0;
let a = prompt('please enter your name')
alert('welcom ' + a)
let y = prompt('Am I from Jordan?')
switch(y.toLowerCase()){
    case 'yes':
        alert('well guessed ')
        score = score +1
        console.log('jordannad ?'+ y);
        break;
default :
    alert("no I'm Jordaniad")
    console.log('jordanian?' + y)
    score =score +0;
}
let z = prompt('is the Iceland my favourite country ?')
switch(z.toLowerCase()){
    case 'yes':
        alert('exactly')
        score = score +1;
        console.log('iceland ?'+ z);
        break;
    default :
        alert('you wrong')
        score =score +0;
        console.log('iceland ?'+ z);
}
let x = prompt("is my age above 30 ?");
if(x.toLowerCase() == "no"){
alert('True I have 26 years');
score =score +1;
console.log('above 20 ?'+ x);
}
else {alert('you are wrong i have 26 years')
score =score +0;
console.log('above 30 let?'+ x);}


let n = prompt("Am I madridesta?")
switch(n){
    case 'yes':
        alert("yes I'm")
        score =score +1;
        console.log('madridesta?'+ n);
        break;
    default:
        alert("NOOOOO")
        score =score +1;
        console.log('madridesta?'+ n);
}
let v = prompt('Am I footballer ?')
    if (v.toLowerCase()) 
    {  
        alert("yes I'm")
        score =score +1;
        console.log('madridesta?'+ v);
    }
        else {
        alert("no I'm footballer")
        score =score +0;
        console.log('why No?'+ v);
    }

document.write('thanks for your visitted'+a);

let counter = 1;

let number 
while (counter < 5 && number !== 26) {
    number = prompt('Guess my age');
    if (number > 26) {
        alert('too high! try again');
        counter++;
    } else if (number < 26) {
        alert('too low! try again');
        counter++;
    }

if (number == 26) {
    alert('That is correct! My age is 26!');
    console.log('That is correct! My age is 26!');
    score =score + 1;
    break;
}
if (counter == 5) {
    score =score +0;
    alert('Sorry you exceeded the number of attempt my age is 26');
    console.log('Sorry you exceeded the number of attempt my age is 26');
}
}
let color = ['red','black','white','blue']
let i;
let bb;
for (i = 0; i < 6; i++) {
    let answer = prompt('Can you guess my favorite color?');
    let Answer = answer.toLowerCase();

    for (var j = 0; j < color.length; j++){
        if (Answer === color[j]) {
            alert('excellent guess and my favourit color is '+ color);
            console.log('excellent guess and my favourit color is '+ color);
            score =score +1;
            bb= true; 
            i=6;           
            break;
        }
    
    }
    if (i !== 6){
        alert('NOOOOOoooo, try again');
    }

}
if(i==6&&bb!=true){alert('no attempt any more'); score =score +0;
console.log('no attempt any more');}
alert('your score is '+ score +' out of 7');
console.log('your score is '+ score+' out of 7');

document.write('thanks for your visitted');

