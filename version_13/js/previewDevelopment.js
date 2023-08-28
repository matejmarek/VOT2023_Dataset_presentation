// Creates the row of small previews of the videos with buttons on it

import {videoPathList} from './01_inputUpdate.js';
import { videoNameList } from './newList.js';

export function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}

const videoBody = document.querySelector(".video-body");

for (let i = 0; i < videoNameList.length; i++) {
    const contentContainer = createElementNS("http://www.w3.org/1999/xhtml", "div");
    let currentClass = "content-container " + videoNameList[i]
    contentContainer.setAttribute("class", currentClass);

    const previewContainer = createElementNS("http://www.w3.org/1999/xhtml", "div");
    currentClass = "preview-container preview " + videoNameList[i]
    previewContainer.setAttribute("class", currentClass);
    contentContainer.appendChild(previewContainer);

    const controlLayer = createElementNS("http://www.w3.org/1999/xhtml", "div");
    currentClass = "control-layer preview " + videoNameList[i]
    controlLayer.setAttribute("class", currentClass);
    previewContainer.appendChild(controlLayer);

    const moreBtn = createElementNS("http://www.w3.org/1999/xhtml", "button");
    currentClass = "more-btn preview " + videoNameList[i]
    moreBtn.setAttribute("class", currentClass);
    controlLayer.appendChild(moreBtn);

    const svg = createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 -960 960 960");
    moreBtn.appendChild(svg);

    const path = createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M480-313 287-506l43-43 120 120v-371h60v371l120-120 43 43-193 193ZM220-160q-24 0-42-18t-18-42v-143h60v143h520v-143h60v143q0 24-18 42t-42 18H220Z");
    svg.appendChild(path);

    const videoSequencePreview = createElementNS("http://www.w3.org/1999/xhtml", "video");
    currentClass = "video-sequence preview " + videoNameList[i]
    videoSequencePreview.setAttribute("class", currentClass);
    videoSequencePreview.setAttribute("src", videoPathList[i]);
    videoSequencePreview.setAttribute("type", "video/mp4");
    previewContainer.appendChild(videoSequencePreview);

    videoBody.appendChild(contentContainer);
}