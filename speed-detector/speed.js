// Challenge 2: Speed Detector (Toy Problem)
function submit(){

    let result1
    let speed = prompt('Enter speed: ')

if (speed<=70) {
    result1 =('Status: Ok');
}
else if (speed<=75){
    dimerit = 1
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=80){
    dimerit =2
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=85){
    dimerit =3
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=90){
    dimerit =4
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=95){
    dimerit =5
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=100){
    dimerit =6
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=105){
    dimerit =7
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=110){
    dimerit =8
    result1 = (`dimerit:${dimerit}`);
}
else if (speed<=115){
    dimerit =9
    result1 = (`dimerit:${dimerit}`);
}
else if (speed<=120){
    dimerit =10
    result1 =(`dimerit:${dimerit}`);
}
else if (speed<=125){
    dimerit =11
    result1 =(`dimerit:${dimerit}`);
}
else {
    result1 =("license suspended")
}
document.getElementById("status").innerHTML=result1;
}