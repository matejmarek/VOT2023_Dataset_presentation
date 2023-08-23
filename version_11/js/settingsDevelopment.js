// Creates the bigger video with description after clicking the button

import {anchorList, videoPathList, innitFramePathList, innitMaskList} from './01_inputUpdateNeeded.js'
import { videoNameList } from './newList.js';

export function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}

export function formatItem(item) {
    if (item === "f1") {
        return "F1";
      }

    return item.charAt(0).toUpperCase() + item.slice(1)
      .replace(/([0-9]+)$/, ' $1')
      .replace(/_/g, ' ')
      .replace(/-/g, '');
  }

export function createSettingsElement(i) {
    // Create the settings-bg element
    const settingsBg = createElementNS("http://www.w3.org/1999/xhtml", "div");
    let currentClass = "settings-bg settings " + videoNameList[i];
    settingsBg.setAttribute("class", currentClass);

    // Create the settings-container element
    const settingsContainer = createElementNS("http://www.w3.org/1999/xhtml", "div");
    currentClass = "settings-container settings " + videoNameList[i];
    settingsContainer.setAttribute("class", currentClass);
    settingsBg.appendChild(settingsContainer);

    // Create the video-sequence element inside the settings-container
    const videoSequenceSettings = createElementNS("http://www.w3.org/1999/xhtml", "video");
    currentClass = "video-sequence settings " + videoNameList[i];
    videoSequenceSettings.setAttribute("class", currentClass);
    videoSequenceSettings.setAttribute("src", videoPathList[i]);
    videoSequenceSettings.setAttribute("type", "video/mp4");
    videoSequenceSettings.setAttribute("controls", "");
    videoSequenceSettings.setAttribute("muted", "");
    videoSequenceSettings.setAttribute("autoplay", "");
    settingsContainer.appendChild(videoSequenceSettings);

    //Show brandthruth button
    const showGrandthruthButton = createElementNS("http://www.w3.org/1999/xhtml", "button");
    currentClass = "show-grandthruth-button";
    showGrandthruthButton.setAttribute("class", currentClass);
    showGrandthruthButton.textContent = "Show grandthruth";
    showGrandthruthButton.addEventListener("click", () => {
        videoSequenceSettings.currentTime = 0;
        videoSequenceSettings.pause();
        if (videoSequenceSettings.hasAttribute("controls")) {
            videoSequenceSettings.removeAttribute("controls");
            showGrandthruthButton.textContent = "Play";
        } else {
            videoSequenceSettings.setAttribute("controls", "");
            videoSequenceSettings.play();
            showGrandthruthButton.textContent = "Show grandthruth";
        }
    });
    settingsContainer.appendChild(showGrandthruthButton);

    // Create the h2 element inside the settings-container
    const h2Settings = createElementNS("http://www.w3.org/1999/xhtml", "h2");
    currentClass = "settings " + videoNameList[i];
    h2Settings.setAttribute("class", currentClass);
    h2Settings.textContent = formatItem(videoNameList[i]);
    settingsContainer.appendChild(h2Settings);

    // Create the text element inside the settings-container
    const textSettings = createElementNS("http://www.w3.org/1999/xhtml", "div");
    currentClass = "text settings " + videoNameList[i];
    textSettings.setAttribute("class", currentClass);
    settingsContainer.appendChild(textSettings);

    const arrayOfArrays = [videoPathList, innitFramePathList, innitMaskList];

    for (const item of arrayOfArrays) {
        const a = createElementNS("http://www.w3.org/1999/xhtml", "a");
        currentClass = "anchor settings " + videoNameList[i];
        a.setAttribute("class", currentClass);
        a.setAttribute("href", item[i]);
        a.setAttribute("download", "");
        a.textContent = anchorList[arrayOfArrays.indexOf(item)];
        textSettings.appendChild(a);
    };

    const p = createElementNS("http://www.w3.org/1999/xhtml", "p");
    currentClass = "paragraph settings " + videoNameList[i];
    p.textContent = anchorList[3];
    textSettings.appendChild(p);

    const videoBody = document.querySelector('.video-body');
    videoBody.appendChild(settingsBg);
};

