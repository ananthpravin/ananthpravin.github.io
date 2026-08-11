// functionality for showing/hiding the comments section
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('play-sound-btn');
    const audioPlayer = document.querySelector('audio');

    if (playBtn && audioPlayer) {
        playBtn.addEventListener('click', () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playBtn.textContent = 'Pause Bear Roar';
            } else {
                audioPlayer.pause();
                playBtn.textContent = 'Play Bear Roar';
            }
        });
    }
});