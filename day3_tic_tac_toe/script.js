const box1=document.querySelector('.box1');
const box2=document.querySelector('.box2');
const box3=document.querySelector('.box3');
const box4=document.querySelector('.box4');
const box5=document.querySelector('.box5');
const box6=document.querySelector('.box6');
const box7=document.querySelector('.box7');
const box8=document.querySelector('.box8');
const box9=document.querySelector('.box9');
let count=0;

const changeColor1=function(){
    if(count%2===0){
        box1.classList.add('redColor');
        count=1;
    }
    else{
        box1.classList.add('greenColor');
        count=0;
    }
}
box1.addEventListener('click',changeColor1);

const changeColor2=function(){
    if(count%2===0){
        box2.classList.add('redColor');
        count=1;
    }
    else{
        box2.classList.add('greenColor');
        count=0;
    }
}
box2.addEventListener('click',changeColor2);

const changeColor3=function(){
    if(count%2===0){
        box3.classList.add('redColor');
        count=1;
    }
    else{
        box3.classList.add('greenColor');
        count=0;
    }
}
box3.addEventListener('click',changeColor3);

const changeColor4=function(){
    if(count%2===0){
        box4.classList.add('redColor');
        count=1;
    }
    else{
        box4.classList.add('greenColor');
        count=0;
    }
}
box4.addEventListener('click',changeColor4);

const changeColor5=function(){
    if(count%2===0){
        box5.classList.add('redColor');
        count=1;
    }
    else{
        box5.classList.add('greenColor');
        count=0;
    }
}
box5.addEventListener('click',changeColor5);

const changeColor6=function(){
    if(count%2===0){
        box6.classList.add('redColor');
        count=1;
    }
    else{
        box6.classList.add('greenColor');
        count=0;
    }
}
box6.addEventListener('click',changeColor6);

const changeColor7=function(){
    if(count%2===0){
        box7.classList.add('redColor');
        count=1;
    }
    else{
        box7.classList.add('greenColor');
        count=0;
    }
}
box7.addEventListener('click',changeColor7);

const changeColor8=function(){
    if(count%2===0){
        box8.classList.add('redColor');
        count=1;
    }
    else{
        box8.classList.add('greenColor');
        count=0;
    }
}
box8.addEventListener('click',changeColor8);

const changeColor9=function(){
    if(count%2===0){
        box9.classList.add('redColor');
        count=1;
    }
    else{
        box9.classList.add('greenColor');
        count=0;
    }
}
box9.addEventListener('click',changeColor9);

6,15,24
12,15,18
15,15