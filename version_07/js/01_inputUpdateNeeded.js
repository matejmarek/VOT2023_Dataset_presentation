//This is the file that needs to be updataded, when reused for new dataset year (there may be other things, but they are all HIGHLITEd)
export const videoNameList = ["ants1", "ball3", "bird-15", "domino_damselfish", "f1", "fernando", "wiper", "wubble_bubble", "yoyo-7", "zebrafish1"]
//export const videoNameList = [
    "agility",
    "animal",
    "ants1",
    "bag",
    "ball3",
    "basketball",
    "basketball-11",
    "beaker",
    "bear-6",
    "bicycle",
    "bicycle-7",
    "bird-15",
    "bird-2",
    "birds1",
    "boat",
    "bolt1",
    "book",
    "book-3",
    "bottle",
    "bubble",
    "bull",
    "bus",
    "bus-2",
    "car",
    "car-9",
    "carchase",
    "cat",
    "cattle-13",
    "chameleon-20",
    "clownfish",
    "colorfish",
    "conduction1",
    "crab-18",
    "crab-6",
    "crabs1",
    "dancingshoe",
    "deer",
    "diabolo",
    "diving",
    "dog",
    "dog-7",
    "dog1",
    "dolphins",
    "domino_damselfish",
    "dragon",
    "drone",
    "drone1",
    "drone_across",
    "duck",
    "f1",
    "fernando",
    "fish1",
    "fish2",
    "fishnet",
    "flag",
    "flag-3",
    "flamingo1",
    "flyboard",
    "fox",
    "freesbiedog",
    "frisbee",
    "gametarget-7",
    "goldfish",
    "goldfish-3",
    "gorilla-13",
    "gymnastics1",
    "gymnastics3",
    "hand",
    "hand-9",
    "hand2",
    "hand3",
    "handball2",
    "hat-1",
    "hat-5",
    "helicopter",
    "houseride",
    "iceskater2",
    "juggling",
    "kangaroo",
    "kite-10",
    "lamb",
    "leaves",
    "licenseplate",
    "lion-12",
    "marathon",
    "matrix",
    "monkey",
    "monkey-3",
    "monkey-9",
    "moorish_idol",
    "motorcycle",
    "motorcycle-1",
    "motorcycle-18",
    "nature",
    "orangefish",
    "panda",
    "parkour",
    "person-12",
    "person-5",
    "pig-2",
    "polo",
    "pool-15",
    "rabbit",
    "rabbit-10",
    "rabbits",
    "racing-16",
    "robot",
    "robot-1",
    "robot-19",
    "robot-5",
    "rollerman",
    "run",
    "sailing",
    "seagull",
    "seastar",
    "sepia-13",
    "sepia-8",
    "shaking",
    "shark-2",
    "sheep-9",
    "singer3",
    "sitcom",
    "skateboard-8",
    "skiing",
    "snake",
    "soccer1",
    "soldier",
    "squirrel",
    "stripedfish",
    "surfboard-12",
    "tank-16",
    "tank-9",
    "tennis",
    "tiger-4",
    "train-7",
    "transparent_fish",
    "uav1",
    "umbrella-19",
    "umbrella-9",
    "volleyball",
    "volleyball-18",
    "volleyball-19",
    "wheel",
    "whitefish",
    "wiper",
    "wubble_bubble",
    "yoyo-7",
    "zebra-10",
    "zebra-16",
    "zebrafish1"
//  ];//THIS HAS TO BE CHANGED EVERY YEAR

export const anchorList = [
    "Download video.mp4",
    "Download bounding box for first frame",
    "Download groundtruth for first frame",
    "Download the whole dataset in our Toolbox. Some sequences from last years might have full-length groundtruth mask and more information."
];

//This will update the year automatically
var year = new Date().getFullYear();
//var year = "2023"
// line 4
const titleElement = document.getElementById("title");
titleElement.textContent = `VOT${year} Challenge |Dataset`;
// line 85
const yearVot = document.getElementById("year-vot");
yearVot.textContent = year;
// line 109
const yearIccv = document.getElementById("year-iccv");
yearIccv.textContent = year;
// line 123
const yearParagraph = document.getElementById("year-paragraph");
yearParagraph.textContent = year;
// line 132
const yearDataset = document.getElementById("year-dataset");
yearDataset.textContent = year;
// line 150
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
