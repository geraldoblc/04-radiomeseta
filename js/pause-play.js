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

    // Event listeners for visibility change and iOS-specific events
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pausePlayer();
        } else {
            resumePlayer();
        }
    });

    window.addEventListener('pagehide', () => {
        pausePlayer();
    });

    window.addEventListener('pageshow', () => {
        resumePlayer();
    });

    // Resume playback if the page was reloaded and wasPlaying was true
    if (wasPlaying) {
        localStorage.removeItem('wasPlaying');
        audio.play();
    }
});