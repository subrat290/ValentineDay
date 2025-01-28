
function moveButton(button) {
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}


window.onload = () => {
    const button = document.getElementById('random'); // Assuming your button's ID is 'random'

    if (button) {
        // Set the button's position to absolute if not already set
        button.style.position = 'absolute';

        // Initially position the button
        moveButton(button);

        // Add mouseover event to move the button when hovered
        button.addEventListener('mouseover', () => moveButton(button));
    } else {
        console.error("Button with ID 'random' not found.");
    }
};
// Generate confetti pieces
document.addEventListener('DOMContentLoaded', () => {
  const confettiWrapper = document.querySelector('.confetti-wrapper');

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    // Randomize confetti position
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 4 + 8 + 's'; // Between 3-5 seconds
    confetti.style.animationDelay = Math.random() * 2 + 's'; // Random delay
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random colors

    confettiWrapper.appendChild(confetti);
  }
});
