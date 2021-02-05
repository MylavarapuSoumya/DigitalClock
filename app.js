
let d = document.getElementById('date-span');
let t = document.getElementById('time-span');

setInterval(function(){
    let today = new Date();
    d.innerHTML=today.getDate()+"-"+(today.getMonth()+1)+"-"+today.getFullYear();;
    t.innerHTML = today.toLocaleTimeString();
}, 1000)
