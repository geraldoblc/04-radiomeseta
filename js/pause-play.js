document.addEventListener('DOMContentLoaded', () => {
    const playerLink = document.getElementById('playerlink');
    const audio = new Audio(playerLink.href);
    let wasPlaying = localStorage.getItem('wasPlaying') === 'true';

    // Function to pause playing
    const pausePlayer = () => {
        if (!audio.paused) {
            audio.pause();
            wasPlaying = true;
            localStorage.setItem('wasPlaying', 'true');
        }
    };

    // Function to resume playing
    const resumePlayer = () => {
        if (wasPlaying) {
            localStorage.removeItem('wasPlaying');
            location.reload();
        }
    };

    // Listen for visibility change events
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pausePlayer();
        } else {
            resumePlayer();
        }
    });

    // Resume playback if the page was reloaded and wasPlaying was true
    if (wasPlaying) {
        localStorage.removeItem('wasPlaying');
        audio.play();
    }
});