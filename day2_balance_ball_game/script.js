console.log("welcome");

var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var ballRadius=10;
var x = -ballRadius;
var y = -ballRadius;
console.log(x,y);
var dx = 0;
var dy = 0;


var paddleHeight=20;
var paddleWidth=100;
var paddleX=(canvas.width-paddleWidth)/2;
var rightPressed=false;
var leftPressed=false;

const keyDownHandler=function(e){
    if(e.key=="Right" || e.key=="ArrowRight"){
        rightPressed=true;
    }
    else if(e.key=="Left" || e.key=="ArrowLeft"){
        leftPressed=true;
    }
}

const keyUpHandler=function(e){
    if(e.key=="Right" || e.key=="ArrowRight"){
        rightPressed=false;
    }
    else if(e.key=="Left" || e.key=="ArrowLeft"){
        leftPressed=false;
    }
}


document.addEventListener("keydown",keyDownHandler,false);
document.addEventListener("keyup",keyUpHandler,false);




const drawBall=function() {
    // console.log("inside drawball");
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#f03e3e";
    ctx.fill();
    ctx.closePath();

    
}

const drawPaddle=function(){
    ctx.beginPath();
    // ctx.rect(Math.random()*canvas.width,canvas.height-20,100,20);
    ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
    // ctx.rect(20,10,50,50);
    ctx.fillStyle = "#37b24d";
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 0, 0, 0.963)";
    ctx.stroke();
    ctx.closePath();   
}

const draw=function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();    

    if(y+dy>canvas.height-ballRadius){
        if(x>paddleX && x<paddleX+paddleWidth){
            dy=-dy;
        }
        else{
            dx=dy=0;
        }

    }
    else if(((x+10)>=canvas.width && (y+10)<=0) || ((x+10)<=0 && (y+10)>=canvas.height)){
        dx=-dx;
        dy=-dy;
    }
    else if((x+dx)>(canvas.width-ballRadius) || (x+dx)<ballRadius){
        dx=-dx;
    } 
    else if(
        // (y+dy)>(canvas.height-ballRdius) ||
        (y+dy)<ballRadius){
        dy=-dy;
    }

    if(rightPressed){
        paddleX+=7;
        if(paddleX+paddleWidth>canvas.width){
            paddleX=canvas.width-paddleWidth;
        }

    }
    else if(leftPressed){
        paddleX-=7;
        if(paddleX<0){
            paddleX=0;
        }
    }

    x += dx;
    y += dy;
}
setInterval(draw, 10);


const btnRestart=document.querySelector('.start');

const restartGame=function(){
    x = canvas.width*0.2+canvas.width*0.6*Math.random();
    y = canvas.height-5*ballRadius;
    dx=dy=2;
    dy=-dy;
    
}

btnRestart.addEventListener('click',restartGame);
