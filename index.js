var min=0;
var sec=0;
var msec=0;
var minheading=document.getElementById('min');
var secheading=document.getElementById('sec');
var msecheading=document.getElementById('msec');
var interval;
function counter(){
    msec++;
    msecheading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secheading.innerHTML=sec;
        msec=0;
    }else if(sec>=60){
        min++;
        minheading.innerHTML=min;
        sec=0;
    }
}
function start(){
interval=setInterval(counter,10);    
}
function pause(){
        clearInterval(interval)
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    minheading.innerHTML=min;
    msecheading.innerHTML=msec;
    secheading.innerHTML=sec;
    pause();
}