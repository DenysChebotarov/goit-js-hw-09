function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

 const refs={
body: document.querySelector('body'),
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]'),
} 
let timerId = null;

  refs.startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor=getRandomHexColor();
        startBtnDisabled();
    }, 1000);
  });
  refs.stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    stopBtnDisabled();
    
  });
  
  function startBtnDisabled() {
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled', true);
  }
  function stopBtnDisabled() {
    refs.stopBtn.setAttribute('disabled', true);
    refs.startBtn.removeAttribute('disabled', true);
  }

  refs.startBtn.style.backgroundColor = 'green';
  refs.stopBtn.style.backgroundColor = 'red';
  refs.startBtn.style.fontSize = '24px';
  refs.stopBtn.style.fontSize = '24px';
  refs.startBtn.style.cursor = 'pointer';
  refs.stopBtn.style.cursor = 'pointer';





  