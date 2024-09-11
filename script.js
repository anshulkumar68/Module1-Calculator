'use strict';

  const display = document.querySelector('.input-field');

  function appendtoDisplay(input){
    display.value += input;
  }

  function clearDisplay(){
    display.value = "";
  }

  function handleDelete(){
    display.value = display.value.toString().slice(0,-1);
  }
  
  function calculate(){
    try{
      let result = eval(display.value);
      if(result%1 !==0)
        display.value = result.toFixed(3);
      else
        display.value = result;
    }
    catch(error){
      console.log(error);
      display.value = "error";
    }
  }

