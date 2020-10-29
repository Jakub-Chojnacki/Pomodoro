// Tutaj będą odwołania do elementów HTML (DOM)
const default_settings = document.getElementById('default'); // guzik do default settings
const main_time = document.getElementById('main'); 
const short_time = document.getElementById('short');
const long_time = document.getElementById('long');
const cycles = document.getElementById('cycles');


function reset_settings(){
  main_time.value = "25";
   short_time.value = "5";
   long_time.value = "15";
   cycles.value = "3";
   console.log('clicked');
} 

default_settings.addEventListener('click', reset_settings);