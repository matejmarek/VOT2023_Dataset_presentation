export function settingsVideoSizing() {

    const videoContainer = document.querySelector('.settings-container.settings');
    const settingsVideo = document.querySelector('.video-sequence.settings');
    const textSettings = document.querySelector('.text.settings');

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
            // Adjust the video size as needed
            settingsVideo.style.width = '100%';
            settingsVideo.style.height = 'auto';

            // Calculate and set the .text.settings height
            const remainingHeight = videoContainerHeight - settingsVideo.clientHeight;
            textSettings.style.height = `${remainingHeight}px`;
        } else {
            // Adjust the video size as needed
            settingsVideo.style.height = '75%';
            settingsVideo.style.width = 'auto';

            // Calculate and set the .text.settings height
            const remainingHeight = videoContainerHeight - settingsVideo.clientHeight;
            textSettings.style.height = `${remainingHeight}px`;
        }

        lastContainerWidth = videoContainerWidth;
        lastContainerHeight = videoContainerHeight;
        lastVideoWidth = settingsVideoWidth;
        lastVideoHeight = settingsVideoHeight;
    });

    observer.observe(videoContainer);
    observer.observe(settingsVideo);
}
