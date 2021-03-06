window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    // audio.volume = 0.4;
    audio.play();
    key.classList.add('active');
    setTimeout(() => {
        key.classList.remove('active');
    }, 70)
})

