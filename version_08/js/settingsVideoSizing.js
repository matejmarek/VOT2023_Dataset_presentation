// This makes the big video inside the "settings as we call" in the right place
// It checs the aspect ratio of both the video and the white box for the concrete media and then makes the right size of the video

export function settingsVideoSizing() {

    const videoContainer = document.querySelector('.settings-container.settings');
    const settingsVideo = document.querySelector('.video-sequence.settings');

    let lastContainerWidth = videoContainer.clientWidth;
    let lastContainerHeight = videoContainer.clientHeight;
    let lastVideoWidth = settingsVideo.clientWidth;
    let lastVideoHeight = settingsVideo.clientHeight;

    const observer = new ResizeObserver((entries) => {
        const videoContainerEntry = entries.find(entry => entry.target === videoContainer);
        const settingsVideoEntry = entries.find(entry => entry.target === settingsVideo);

        const videoContainerWidth = videoContainerEntry ? videoContainerEntry.contentRect.width : lastContainerWidth;
        const videoContainerHeight = videoContainerEntry ? videoContainerEntry.contentRect.height : lastContainerHeight;
        const settingsVideoWidth = settingsVideoEntry ? settingsVideoEntry.contentRect.width : lastVideoWidth;
        const settingsVideoHeight = settingsVideoEntry ? settingsVideoEntry.contentRect.height : lastVideoHeight;

        let containerRatio = videoContainerWidth / videoContainerHeight / 0.65;
        let videoRatio = settingsVideoWidth / settingsVideoHeight;
        let isWider = videoRatio > containerRatio;

        if (isWider) {
            // the video is wider
            settingsVideo.style.width = '100%';
            settingsVideo.style.height = 'auto';
        } else {
            // the video is higher
            settingsVideo.style.height = '65%';
            settingsVideo.style.width = 'auto';
        }

        lastContainerWidth = videoContainerWidth;
        lastContainerHeight = videoContainerHeight;
        lastVideoWidth = settingsVideoWidth;
        lastVideoHeight = settingsVideoHeight;
    });

    observer.observe(videoContainer);
    observer.observe(settingsVideo);
}