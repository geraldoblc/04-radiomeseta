document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('playerlink');
    let wasPlaying = false;

    // Handle visibility change
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (!audioPlayer.paused) {
                audioPlayer.pause();
                wasPlaying = true;
            }
        } else {
            if (wasPlaying) {
                location.reload(); // Reload the page when user comes back to it
            }
        }
    });

    // Simulating call events using page visibility
    if ('onblur' in window) {
        window.addEventListener('blur', () => {
            if (!audioPlayer.paused) {
                audioPlayer.pause();
                wasPlaying = true;
            }
        });

        window.addEventListener('focus', () => {
            if (wasPlaying) {
                location.reload(); // Reload the page when user comes back to it
            }
        });
    }
});
