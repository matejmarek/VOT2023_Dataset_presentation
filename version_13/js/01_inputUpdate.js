//This is the file that needs to be updataded, when reused for new dataset year (there may be other things, but they are all HIGHLITEd)
import {videoNameList} from "./newList.js"

export const anchorList = [
    "Downloads:",
    "video.mp4", 
    //"frame sequence",
    "first frame with groundtruth",
    "groundtruth for first frame",
    "Download the whole dataset in Toolbox. <br>(Some sequences from last years might have full-length groundtruth mask and more information:)",
    "Here"
];

const nos = videoNameList.length;
const yearVnumberOfSequencesot = document.getElementById("number-of-sequences");
yearVnumberOfSequencesot.textContent = nos;

const currentDate = new Date();
let year = currentDate.getFullYear();
//let year = '2023'

const titleElement = document.getElementById("title");
titleElement.textContent = `VOT${year} Challenge |Dataset`;

const yearVot = document.getElementById("year-vot");
yearVot.textContent = year;

const yearIccv = document.getElementById("year-iccv");
yearIccv.textContent = year;

const yearDataset = document.getElementById("year-dataset");
yearDataset.textContent = year;


const yearParagraph = document.getElementById("year-paragraph");
yearParagraph.textContent = year;

const yearLast = document.getElementById("zear-last");
yearLast.textContent = year;


let videoPathList = [];
let sequenceList = [];
let innitFramePathList = [];
let innitMaskList = [];

//CHECK FOR CORRECT PATH TO YOUR MEDIA
for (let i = 0; i < videoNameList.length; i++) {
    videoPathList.push('../media/' + videoNameList[i] + '/' + videoNameList[i] + '.mp4');
    //sequenceList.push('../media/' + videoNameList[i] + '/' + videoNameList[i] + '_frame_sequence.zip')
    innitFramePathList.push('../media/' + videoNameList[i] + '/' + videoNameList[i] + '_groundtruth_mask.jpg'); 
    innitMaskList.push('../media/' + videoNameList[i] + '/init_rect.txt'); 
}
export { videoPathList, sequenceList, innitFramePathList, innitMaskList };
