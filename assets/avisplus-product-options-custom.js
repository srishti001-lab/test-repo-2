let interval = setInterval(function () {
  let apElements = document.querySelector('#avpoptions-container__v2');
  if (apElements){
    $('#avpoptions-container__v2').after($('.product-form__input.product-form__quantity'));
    clearInterval(interval);
  }
}, 100);

function forceQuitInterval(){
  clearInterval(interval);
}

setTimeout(forceQuitInterval, 10000);