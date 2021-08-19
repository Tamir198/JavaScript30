window.onload = (event) => {
setDate();
setInterval(setDate, 1000);
}

function setDate() {
  const hoursHand = document.querySelector('.hour-hand');
  const minutsHand = document.querySelector('.min-hand');
  const secondsHand = document.querySelector('.second-hand');
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minutsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}
