// Creates the row of small previews of the videos with buttons on it

import {videoNameList, videoPathList} from './01_inputUpdateNeeded.js';

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
    path.setAttribute("d", "M513-140H140q-24 0-42-18t-18-42v-540q0-24 18-42t42-18h694q24 0 42 18t18 42v246h-60v-246H140v540h373v60ZM395-297v-346l263 173-263 173ZM730-40l-5-48q-20-6-41-17.5T650-131l-42 20-35-54 38-30q-5-23-5-41.5t5-41.5l-38-30 35-55 42 20q13-12 34-24t41-18l5-49h60l6 49q20 6 41 18t34 24l42-20 35 55-38 30q5 23 5 41.5t-5 41.5l38 30-35 54-42-20q-13 14-34 25.5T796-88l-6 48h-60Zm30-95q44 0 73-29t29-73q0-44-29-73t-73-29q-44 0-73 29t-29 73q0 44 29 73t73 29Z");
    svg.appendChild(path);

    const videoSequencePreview = createElementNS("http://www.w3.org/1999/xhtml", "video");
    currentClass = "video-sequence preview " + videoNameList[i]
    videoSequencePreview.setAttribute("class", currentClass);
    videoSequencePreview.setAttribute("src", videoPathList[i]);
    videoSequencePreview.setAttribute("type", "video/mp4");
    previewContainer.appendChild(videoSequencePreview);

    videoBody.appendChild(contentContainer);
}