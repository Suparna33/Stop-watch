let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let hr=0;
let min=0;
let sec=0;

let stopTime = true;

function startWatch(){
    if(stopTime == true){
        stopTime = false;
        timer();
    }
}

function stopWatch(){
   if(stopTime == false){
     stopTime = true;
    }
}

function resetWatch(){
    hour.innerHTML = '00';
    minute.innerHTML = '00';
    second.innerHTML = '00';

    stopTime = true;

    hr = 0;
    min = 0;
    sec = 0;
}

function timer(){
    if(stopTime == false){
        sec++;
        if(sec == 60){
            min++;
            sec=0;
        }
        
        if(min == 60){
            hr++;
            min = 0;
        }

        let h = hr < 10 ? '0'+ hr : hr;
        let m = min < 10 ? '0'+ min : min;
        let s = sec < 10 ? '0'+ sec : sec;

        hour.innerHTML = h;
        minute.innerHTML = m;
        second.innerHTML = s;

        setTimeout(timer, 1000)
    }
}