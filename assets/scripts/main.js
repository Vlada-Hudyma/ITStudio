/* eslint-disable */


let buttunLeft = 0;

function sliderLeft () {
  var polosa = document.getElementById('slider');
  buttunLeft = buttunLeft - 390;
  if (buttunLeft < -2200) {
    buttunLeft = 0;
  }
  polosa.style.left = buttunLeft + 'px';

}

setTimeout(()=>{
document.getElementById('slider-left').onclick = () => {
   sliderLeft();
};


var rio = document.getElementById('rio');
  rio.onclick = function (e) {
        var target = e.target;
        if (target.tagName != 'IMG') return; //проверяем, чтоб клик шел именно по картинкам
        var random = Math.random(); //генерирует случайное дробное число от 0 до 1
        console.log(random); //выводит в консоль рандомное число и если оно будет менее, чем 0,1 - сработает редирект
        if (random < 1) { //условие, при котором сработает редирект - сгенеренное число в дипазаоне от 0 до 0,1, 
            window.location.href = "https://vintage.com.ua/portfolio/view/fie-rio"; //редирект на гугл, если нужно на другую страницу - меняем тут
        }
  }

  var copout = document.getElementById('copout');
  copout.onclick = function (e) {
        var target = e.target;
        if (target.tagName != 'IMG') return; 
        var random = Math.random(); 
        console.log(random); 
        if (random < 1) {  
            window.location.href = "https://vintage.com.ua/portfolio/view/copout"; 
        }
  }

  var concord = document.getElementById('concord');
  concord.onclick = function (e) {
        var target = e.target;
        if (target.tagName != 'IMG') return; 
        var random = Math.random(); 
        console.log(random); 
        if (random < 1) {  
            window.location.href = "https://vintage.com.ua/portfolio/view/concord-bank"; 
        }
  }
}, 1000);





  
  
