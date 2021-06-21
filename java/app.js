a = prompt('please enter your name')
alert('welcom ' + a)
let y = prompt('Am I from Jordan?')
switch(y.toLowerCase()){
    case 'yes':
        alert('well guessed ')
        console.log('jordannad ?'+ y);
        break;
default :
    alert("no I'm Jordaniad")
    console.log('jordanian?' + y)
}
let z = prompt('is the Iceland my favourite country ?')
switch(z.toLowerCase()){
    case 'yes':
        alert('exactly')
        console.log('iceland ?'+ z);
        break;
    default :
        alert('you wrong')
        console.log('iceland ?'+ z);
}
let x = prompt("is my age above 20 ?");
if(x.toLowerCase() == "no"){
alert('I have 26 years');
console.log('above 20 ?'+ x);
}
else {alert('you are right i have 26 years')
console.log('above 20 let?'+ x);}

let n = prompt("Am I madridesta?")
switch(n){
    case 'yes':
        alert("yes I'm")
        console.log('madridesta?'+ n);
        break;
    default:
        alert("NOOOOO")
        console.log('madridesta?'+ n);
}
let v = prompt('Am I footballer ?')
    if (v.toLowerCase()) 
    {  
        alert("yes I'm")
        console.log('madridesta?'+ v);
    }
        else {
        alert("no I'ms")
        console.log('why No?'+ v);
    }
document.write('thanks for your visitted')