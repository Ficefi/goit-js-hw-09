const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const bodyBtn = document.querySelector('.flexbox');
const body = document.querySelector('body');
const paragraph = document.querySelector('a');
let disabled = false;
let timer;
let paragraphText = paragraph.textContent;

start.addEventListener('click', () => {
  timer = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
  start.disabled = true;
  stop.disabled = false;
  paragraph.textContent = '';
});

stop.addEventListener('click', () => {
  clearInterval(timer);
  start.disabled = false;
  stop.disabled = true;
  paragraph.textContent = paragraphText;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

bodyBtn.style.display = 'flex';
bodyBtn.style.justifyContent = 'center';
bodyBtn.style.marginTop = '20%';
start.style.padding = '10px 20px';
stop.style.padding = '10px 20px';
