//This is the file that needs to be updataded, when reused for new dataset year (there may be other things, but they are all HIGHLITEd)
import {videoNameList} from "./newList.js"

export const anchorList = [
    "Download video.mp4",
    "Download first frame with groundtruth",
    "Download groundtruth for first frame",
    "Download the whole dataset in our Toolbox. Some sequences from last years might have full-length groundtruth mask and more information."
];

const currentDate = new Date();
let year = currentDate.getFullYear();
const dayOfMonth = currentDate.getDate();
const month = currentDate.getMonth();
const april = `${dayOfMonth}/${month}`;

//if (april === '1/3') {
if (true) {
    year = '4356';
}
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
let innitFramePathList = [];
let innitMaskList = [];

//CHECK FOR CORRECT PATH TO YOUR MEDIA
for (let i = 0; i < videoNameList.length; i++) {
    videoPathList.push('../media/' + videoNameList[i] + '/' + videoNameList[i] + '.mp4');
    innitFramePathList.push('../media/' + videoNameList[i] + '/' + videoNameList[i] + '_groundtruth_mask.jpg'); 
    innitMaskList.push('../media/' + videoNameList[i] + '/init_rect.txt'); 
}
export { videoPathList, innitFramePathList, innitMaskList };
