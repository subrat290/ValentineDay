
function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}


window.onload = () => {
    const button = document.getElementById('random'); 

    if (button) {
        button.style.position = 'absolute';

        moveButton(button);

        button.addEventListener('mouseover', () => moveButton(button));
    } else {
        console.error("Button with ID 'random' not found.");
    }
};

document.addEventListener('DOMContentLoaded', () => {
  const confettiWrapper = document.querySelector('.confetti-wrapper');

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 4 + 8 + 's'; 
    confetti.style.animationDelay = Math.random() * 2 + 's'; 
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; 

    confettiWrapper.appendChild(confetti);
  }
});
