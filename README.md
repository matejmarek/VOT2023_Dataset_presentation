# VOT_dataset_presentation_4
This is the fourth version of VOT Web 2023 and the future dataset presentation creation guide.

The majority of the site is borrowed from the original VOT site. we assume that they don't work without their JS files, but when merged with the parent
website, the anchors should work. There is just one change needed: change the <i>videoNameList</i> in <i>01_inputUpdateNeeded.js</i> and make a whole new media folder from your dataset, for what there is <i>video_maker.py</i>.

The site structure:
* dataset.html
  * listStyles.css
  * sequenceRow.css
  * actionManagment.js
  * navigationList.js
  * previewDevelopment.js
    * 01_inputUpdateNeeded.js
    * settingsDevelopment.js
    * settingsVideoSizing.js
       * These are made automatically by <i>media_maker.py</i>:
       * newList.js
       *  media
  * Programs you will have in your sources: 
  * highlight.css
  * vot.css
  * highlight.js
  * uri.js

Created by Matej Marek & Simon Bravek & Tomas Peterka
