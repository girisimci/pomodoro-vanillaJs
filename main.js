let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let wm = document.getElementById('w_minutes');
let ws = document.getElementById('w_seconds');

let bm = document.getElementById('b_minutes');
let bs = document.getElementById('b_seconds');


var startTimer; //global
//start
start.addEventListener('click',()=>{
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Zamanlayıcı Zaten Çalışıyor !");
    }
});
//reset
reset.addEventListener('click',()=>{
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 10;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
});
//stop
stop.addEventListener('click',()=>{
    stopInterval()
    startTimer = undefined;
})


//Start Timer 
const timer=()=>{
    //Work Timer 
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    //Break Timer 
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //döngü
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";

        bm.innerText = 10;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
const stopInterval=()=>{
    clearInterval(startTimer);
}