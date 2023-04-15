# ovs_chillout_app
## Demo site: https://overseas-student-chill-out-app.netlify.app/

A webpage helping Overseas students to relax after a long hard day of learning at universities/colleges.

## Major features:

Responsive layout design: 
- one column for the mobile screen, 2 columns for the tablet screen and 3 columns for the larger screens.

Header: 
- background images randomly  pulled from Unsplash site each time the page is refreshed 
- two clocks that show local time and home country time (currently set to UK and China)

Main section:
- all green areas are clickable and a trigger of certain event 
- inspirational quotes pulled from API whenever the page is refresh or when the green area is clicked
- local current weather pulled form API
- activities reminder: key in the activities and time, when the scheduled time is up, a modal will pop up and show the activities 
- random quotes: get a joke (including delayed punchline) from API when clicking the green area
- interactive particle images/games:  the thumbnails of 10 hand-picked images from Codepen will be shown one by one at each click 
  of "Next" button; a larger image will pop up when clicking "Expand" button
- youtube music video clips (from Youtube API): typing in a music title/artist name will show 3 relevant video clips (if available), including
  a thumbnail, video title, artist name and album name. 
  
Unit Testing (React testing library):
- All components have been tested (8 test suites in total)


### Initial planning:
### Screenshots of the small screen, medium screen and large screen wireframes respectively: 
<p float="left">
  <img src="/src/images/small_screen.png" width="200px" />
  <img src="/src/images/medium_screen.png" width="200px" />
  <img src="/src/images/larger_screen.png" width="400px" />
</p>





