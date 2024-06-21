document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('playerlink');

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            audioPlayer.pause();
        } else {
            audioPlayer.play();
        }
    });
});