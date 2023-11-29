function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
}

let popLeft=document.getElementById('popLeft');
let popRight=document.getElementById('popRight');
let popSong=document.getElementsByClassName('rty2')[0];
popRight.addEventListener('click',()=>{
    popSong.scrollLeft+=330;
});
popLeft.addEventListener('click',()=>{
    popSong.scrollLeft-=330;
});

animateCount(250, 2000, 'counter','+');
animateCount(235, 2000, 'counter1');
animateCount(95, 2000, 'counter2','%');
function animateCount(targetValue, duration, elementId, symbol='') {
  const element = document.getElementById(elementId);
  const startValue = 0;
  const interval = 10;
  const increments = (targetValue - startValue) / (duration / interval);
  let currentValue = startValue;
  const updateCounter = () => {
    currentValue += increments;
    element.textContent = Math.round(currentValue)+symbol;
    if (currentValue >= targetValue) {
      element.textContent = targetValue+symbol;
      clearInterval(counterInterval);
    }
  };
  const counterInterval = setInterval(updateCounter, interval);
}