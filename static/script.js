const button = document.getElementById('chugButton');
const funSound = document.getElementById('funSound');
const seriousSound = document.getElementById('seriousSound');
const soundSlider = document.getElementById('soundSlider');

// Preload pressed image (if you have it)
const pressedImage = new Image();
pressedImage.src = 'static/media/button_pressed.png';

function getSelectedSound() {
    return soundSlider.value === '0' ? funSound : seriousSound;
}

// Handle mouse events
button.addEventListener('mousedown', () => {
    button.classList.add('pressed');
    const sound = getSelectedSound();
    sound.currentTime = 0;
    sound.play();
});
button.addEventListener('mouseup', () => {
    button.classList.remove('pressed');
});
button.addEventListener('mouseleave', () => {
    button.classList.remove('pressed');
});

// Handle touch events
button.addEventListener('touchstart', (e) => {
    button.classList.add('pressed');
    const sound = getSelectedSound();
    sound.currentTime = 0;
    sound.play();
    e.preventDefault();
});
button.addEventListener('touchend', () => {
    button.classList.remove('pressed');
});
button.addEventListener('touchcancel', () => {
    button.classList.remove('pressed');
});
