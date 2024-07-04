/*document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.beat-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sound = button.getAttribute('data-sound');
            playSound(sound);
        });
    });
});

function playSound(sound) {
    const audio = new Audio(`sounds/${sound}.mp3`);
    audio.play();
}
*/
//


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.beat-button');
    const sounds = {};

    buttons.forEach(button => {
        const sound = button.getAttribute('data-sound');
        const audio = new Audio(`sounds/${sound}.mp3`);
        sounds[sound] = audio;

        button.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
                audio.currentTime = 0;  // Reset to start
            }
        });
    });
});
