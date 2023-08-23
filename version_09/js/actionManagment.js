// Manages actions

import { createSettingsElement } from "./settingsDevelopment.js";
import { settingsVideoSizing } from "./settingsVideoSizing.js";


function managePlayPause() {
    const settingsVideo = document.querySelector('.video-sequence.settings');
    function handleKeyPress(event) {
        if (event.keyCode === 75) {
            settingsVideo.paused? settingsVideo.play(): settingsVideo.pause();
        }
    }
    document.addEventListener('keydown', handleKeyPress);
};

window.addEventListener('DOMContentLoaded', () => {
    const contentContainers = document.querySelectorAll('.content-container');
    const previewVideos = document.querySelectorAll('.video-sequence.preview');
    const listBtns = document.querySelectorAll('.list');
    const moreBtns = document.querySelectorAll('.more-btn.preview');
    for (let i = 0; i < contentContainers.length; i++) {
        contentContainers[i].addEventListener('mouseover', () => {
            previewVideos[i].play();
        });
        contentContainers[i].addEventListener('mouseout', () => {
            previewVideos[i].pause();
        });

        listBtns[i].addEventListener('click', () => {
            const settingsBg = document.querySelector('.settings-bg.settings');
            if (settingsBg) {
                return
            }
            createSettingsElement(i);
            settingsVideoSizing();
            managePlayPause();
        });

        moreBtns[i].addEventListener('click', () => {
            const settingsBg = document.querySelector('.settings-bg.settings');
            if (settingsBg) {
                return
            }
            createSettingsElement(i);
            settingsVideoSizing();
            managePlayPause();
        });
    }
    document.addEventListener('click', (event) => {
        const settingsBg = document.querySelector('.settings-bg.settings');
        if (event.target === settingsBg) {
            settingsBg.remove();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) {
            const settingsBg = document.querySelector('.settings-bg.settings');
            settingsBg.remove();
        }
    });
});