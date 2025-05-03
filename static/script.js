const button = document.getElementById('chugButton');
const sound = document.getElementById('chugSound');

button.addEventListener('mousedown', () => {
    button.classList.add('pressed');
    sound.currentTime = 0; // rewind to start
    sound.play();
});

button.addEventListener('mouseup', () => {
    button.classList.remove('pressed');
});

button.addEventListener('mouseleave', () => {
    button.classList.remove('pressed');
});