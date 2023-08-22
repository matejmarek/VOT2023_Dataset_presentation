//This will define the list of sequences and its functions
import { videoNameList, videoPathList} from './01_inputUpdateNeeded.js';

function formatItem(item) {
  if (item === "f1") {
    return "F1";
  }
  
  return item.charAt(0).toUpperCase() + item.slice(1)
    .replace(/([0-9]+)$/, ' $1')
    .replace(/_/g, ' ')
    .replace(/-/g, '');
}

const navigatorList = document.querySelector(".navigator");

for (let i = 0; i < videoNameList.length; i++) {
  const listItem = document.createElement("li");
  navigatorList.appendChild(listItem);

  const anchorElement = document.createElement("a");
  let currentClass = "navigator" + videoNameList[i]
  listItem.setAttribute("class", currentClass)
  currentClass = "list"
  listItem.setAttribute("class", currentClass)
  listItem.appendChild(anchorElement);

  const textNode = document.createTextNode(formatItem(videoNameList[i]));
  anchorElement.appendChild(textNode);

  const downloadButton = document.createElement("a");
  downloadButton.classList.add("hovering");
  downloadButton.href = videoPathList[i]
  downloadButton.setAttribute("download", "");
  listItem.appendChild(downloadButton);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "hoverElement");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  downloadButton.appendChild(svg);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M12 16l-4-4h3V4h2v8h3l-4 4zm-4 5h8v2H8z");
  svg.appendChild(path);

}






