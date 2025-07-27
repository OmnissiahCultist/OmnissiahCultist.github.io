/* ===== ERROR SOUND JS ===== */

/* Post DOM Condition */
document.addEventListener('DOMContentLoaded', function () {
    /* Create Element */
    const btn = document.getElementById('errorSoundButton');
    const audio = document.getElementById('errorSound');
    /* Click Activation */
    if (btn && audio) {
    btn.addEventListener('click', function () {
        audio.pause();
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Playback failed:', err));
    });
    }
});