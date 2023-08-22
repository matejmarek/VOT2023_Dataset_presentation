# VOT_dataset_presentation_3
This is the fourth version of VOT Web 2023 and the future dataset presentation creation guide.

The majority of the site is borrowed from the original VOT site. I assume that they don't work without their JS files, but when merged with the parent
website, the anchors should work. There is just one change needed: change the <i>videoNameList</i> in <i>01_inputUpdateNeeded.js</i> and make a whole new media folder from your dataset, for what there is <i>video_maker.py</i>.

The site structure:
* main.html
  * listStyles.css
  * sequenceRow.css
  * 01_inputUpdateNeeded.js
  * actionManagment.js
  * previewDevelopment.js
  * navigationList.js
