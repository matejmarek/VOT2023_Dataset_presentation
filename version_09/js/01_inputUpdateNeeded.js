//This is the file that needs to be updataded, when reused for new dataset year (there may be other things, but they are all HIGHLITEd)
import {videoNameList} from "./newList.js"

export const anchorList = [
    "Download video.mp4",
    "Download bounding box for first frame",
    "Download groundtruth for first frame",
    "Download the whole dataset in our Toolbox. Some sequences from last years might have full-length groundtruth mask and more information."
];

var year = "2023"
const titleElement = document.getElementById("title");
titleElement.textContent = `VOT${year} Challenge |Dataset`;

const yearVot = document.getElementById("year-vot");
yearVot.textContent = year;

const yearIccv = document.getElementById("year-iccv");
yearIccv.textContent = year;

const yearParagraph = document.getElementById("year-paragraph");
yearParagraph.textContent = year;

const yearDataset = document.getElementById("year-dataset");
yearDataset.textContent = year;

const yearLast = document.getElementById("zear-last");
yearLast.textContent = year;


let videoPathList = [];
let innitBoxPathList = [];
let innitMaskList = [];
for (let i = 0; i < videoNameList.length; i++) {
    videoPathList.push('../media/' + videoNameList[i] + '/' + videoNameList[i] + '.mp4');
    innitBoxPathList.push('../media/' + videoNameList[i] + '/groundtruth_1.txt'); //CHECK FOR CORRECT PATH TO YOUR MEDIA
    innitMaskList.push('../media/' + videoNameList[i] + '/innitRect.txt');
}
export { videoPathList, innitBoxPathList, innitMaskList };
