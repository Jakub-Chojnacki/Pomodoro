// Tutaj będą odwołania do elementów HTML (DOM)
const default_settings = document.getElementById('default'); // guzik do default settings
const main_time = document.getElementById('main');  // ustawienia głownego timera
const short_time = document.getElementById('short'); // ustawienia krótkiej przerwy
const long_time = document.getElementById('long'); // ustawienia długiej przerwy
const cycles = document.getElementById('cycles'); /// liczba cykli 
const save = document.getElementById('save');
const clock = document.getElementById('clock');
const spanTimer = document.getElementById('current_timer');
const spanLong = document.getElementById('current_long');
const spanShort = document.getElementById('current_short');
const startButton = document.getElementById('start');
const shortButton = document.getElementById('short_break');
const longButton = document.getElementById('long_break');
const normalButton = document.getElementById('normal');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const cog = document.getElementById('cog_open');
// zamiana czasu z ustawień na Int
parsedTimer = parseInt(spanTimer.textContent) * 60;
parsedLong = parseInt(spanLong.textContent) * 60;
parsedShort =parseInt(spanShort.textContent) * 60;
let z = parsedTimer;



function DisplayBeforeStart(mode){
  let x = mode;
  
  minutes = (x / 60) | 0;
  seconds = (x % 60) | 0;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.textContent = minutes + ":" + seconds; 
  
}


window.addEventListener('load',function(){DisplayBeforeStart(parsedTimer); y = 1});
normalButton.addEventListener('click', function(){DisplayBeforeStart(parsedTimer); z = parsedTimer
 y = 1;clearInterval(myTimer);startButton.style.pointerEvents = 'auto';});
shortButton.addEventListener('click', function(){DisplayBeforeStart(parsedShort); z = parsedShort; y = 2; clearInterval(myTimer);startButton.style.pointerEvents = 'auto';});
longButton.addEventListener('click', function(){DisplayBeforeStart(parsedLong);z=parsedLong;y = 3;clearInterval(myTimer);startButton.style.pointerEvents = 'auto';}  );


function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      minutes,
      seconds;
  function timer() {
     
     diff = duration - (((Date.now() - start) / 1000) | 0);

      
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes =  ("0" + minutes).slice(-2);
      seconds = ("0" + seconds).slice(-2);
      
      display.textContent = minutes + ":" + seconds; 
      minutes = parseInt(minutes);
      seconds = parseInt(seconds);
      console.log(diff);
      if (diff <= 0) {
          // dodać 1 żeby odliczanie zaczynało się od pełnych minut, a nie np. 4:59
          start = Date.now() + 1000;
      }
      if(diff === 0){
        clearInterval(myTimer);
        startButton.style.pointerEvents = 'auto';
      }
  };
  // najpierw zadeklarowanie funkcji żeby nie czekać 1 interwalu zanim się włączy
  timer();
  myTimer = setInterval(timer, 1000);
  stopButton.addEventListener('click', function(){
    clearInterval(myTimer);
      z = minutes*60 + seconds - 1;
      startButton.style.pointerEvents = 'auto';
  
  });
}

startButton.addEventListener('click', function(){startTimer(z,clock);
   startButton.style.pointerEvents = 'none';


});



// Funkcja do resetu ustawień

function reset_settings(){
  main_time.value = "25";  current_timer.textContent = "25";
   short_time.value = "5"; current_short.textContent = "5";
   long_time.value = "15"; current_long.textContent = "15";
   cycles.value = "3"; current_cycles.textContent = '3';
   parsedTimer = parseInt(spanTimer.textContent) * 60;
  parsedLong = parseInt(spanLong.textContent) * 60;
  parsedShort =parseInt(spanShort.textContent) * 60;
  if(y === 2){
    z = parsedShort;
    DisplayBeforeStart(z);
  }else if(y === 1) {
    z = parsedTimer;
    DisplayBeforeStart(z);
  }else if(y === 3){
    z = parsedLong;
    DisplayBeforeStart(z);
  };
  

} 

default_settings.addEventListener('click', reset_settings);

//update ustawień
short_time.addEventListener('change', updateShortValue);
main_time.addEventListener('change', updateTimerValue);
long_time.addEventListener('change', updateLongValue);
cycles.addEventListener('change', updateCyclesValue);

function updateShortValue(e){
  const current_short = document.getElementById('current_short');
 current_short.textContent = e.target.value;
}

function updateTimerValue(e){
  const current_timer = document.getElementById('current_timer');
 current_timer.textContent = e.target.value;
 

 
}

function updateLongValue(e){
  const current_long = document.getElementById('current_long');
 current_long.textContent = e.target.value;
}

function updateCyclesValue(e){
  const current_cycles = document.getElementById('current_cycles');
 current_cycles.textContent = e.target.value;
}

function saveSettings(){
 parsedTimer = parseInt(spanTimer.textContent) * 60;
parsedLong = parseInt(spanLong.textContent) * 60;
parsedShort =parseInt(spanShort.textContent) * 60;
if(y === 2){
  z = parsedShort;
  DisplayBeforeStart(z);
}else if(y === 1) {
  z = parsedTimer;
  DisplayBeforeStart(z);
}else if(y === 3){
  z = parsedLong;
  DisplayBeforeStart(z);
  
};
clearInterval(myTimer);startButton.style.pointerEvents = 'auto';

}
save.addEventListener('click', saveSettings);
resetButton.addEventListener('click', function reset(){
  clearInterval(myTimer);
      startButton.style.pointerEvents = 'auto';
  if(y === 2){
    z = parsedShort;
    DisplayBeforeStart(z);
  }else if(y === 1) {
    z = parsedTimer;
    DisplayBeforeStart(z);
  }else if(y === 3){
    z = parsedLong;
    DisplayBeforeStart(z);
  };
  clearInterval(myTimer);startButton.style.pointerEvents = 'auto';
})