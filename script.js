document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');
    const video = document.getElementById('loading-video');

    // Check if the user has already viewed the loading screen in this session
    if (sessionStorage.getItem('videoPlayed') === 'true') {
        // Skip the loading screen if the video has already been played during the session
        loadingScreen.style.display = 'none';
        content.style.display = 'block';
    } else {
        // Play the video for the first time in the session
        video.addEventListener('ended', function() {
            setTimeout(function() {
                loadingScreen.style.display = 'none';
                content.style.display = 'block';
                // Set sessionStorage flag to indicate the video has been played in this session
                sessionStorage.setItem('videoPlayed', 'true');
            }, 5000); // 5 seconds delay
        });

        // Fallback in case the video doesn't play or ends early
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            content.style.display = 'block';
            // Set sessionStorage flag to indicate the video has been played in this session
            sessionStorage.setItem('videoPlayed', 'true');
        }, 10000); // 10 seconds total
    }
});
