'use strict'

let deadLine = '2022-10-02';
let nowDate = new Date();
let t;
let result;

// console.log(nowDate);

function calculation () {
    t = Date.parse(deadLine) - Date.parse(nowDate);
 let day = Math.floor(t/(1000*60*60*24));
 let hours = Math.floor((t/(1000*60*60))%24);
 let minutes = Math.floor((t/(1000*60))%60);
 let seconds = Math.floor((t/1000)%120);
   result = {
       'day': day,
       'hours': hours,
       'minutes': minutes,
       'seconds': seconds,
       'total': t
    }
    // console.log(result);
    // return result;
}


function showTimer() {
   let d= document.querySelector('#day'),
       h = document.querySelector('#hour'),
       m = document.querySelector('#minutes'),
       s = document.querySelector('#second'),
       start = setInterval(setClock, 1000);

    setClock();

    function setClock() {
        calculation();
        d.innerHTML = result.day,
        h.innerHTML = result.hours,
        m.innerHTML = result.minutes,
        s.innerHTML = result.seconds;
    }
    
    if (result.total <= 0) {
        clearInterval(start);
    } 
}

showTimer();