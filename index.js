const dayEL=document.getElementById("day")
const hourEl=document.getElementById("hour")
const minuteEl=document.getElementById("minute")
const secondEl=document.getElementById("second")

const newYear=new Date("jan 1, 2024 00:00:00").getTime();

updateCountdown()

function updateCountdown(){
    const now=new Date().getTime();
    const gap=newYear-now;

    const second=1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;

    const d=Math.floor(gap/day);
    const h=Math.floor((gap%day)/hour);
    const m=Math.floor((gap%hour)/minute)
    const s=Math.floor((gap%minute)/second)

    dayEL.innerText=d;
    hourEl.innerText=h;
    minuteEl.innerText=m;
    secondEl.innerText=s;
    setTimeout(updateCountdown,1000)
}