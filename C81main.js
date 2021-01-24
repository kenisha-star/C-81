canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown",mymouse);
color= "red";
function mymouse(e) {
color=document.getElementById("color").value;    
 mx= e.clientX-canvas.offsetLeft ;
my= e.clientY-canvas.offsetTop;
console.log(mx,my);
circle(mx,my);
}
function circle(mx,my) {
ctx.beginPath();    
ctx.strokeStyle= color;
ctx.lineWidth= 6 ;
ctx.arc(mx, my, 40 ,0 , 2*Math.PI);
ctx.stroke();
}