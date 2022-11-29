// Challenge 2: Speed Detector (Toy Problem)
function submit(){
    const speed=document.getElementById("speed").value;

if (speed<=70) {
    console.log('ok');
}
else if (speed<=75){
    dimerit = 1
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=80){
    dimerit =2
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=85){
    dimerit =3
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=90){
    dimerit =4
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=95){
    dimerit =5
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=100){
    dimerit =6
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=105){
    dimerit =7
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=110){
    dimerit =8
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=115){
    dimerit =9
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=120){
    dimerit =10
    console.log(`dimerit:${dimerit}`);
}
else if (speed<=125){
    dimerit =11
    console.log(`dimerit:${dimerit}`);
}
else {
    console.log ("license suspended")
}
const output=document.getElementById("status");
output.textContent="status";
}