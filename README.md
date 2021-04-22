# Curated-Tube

## Overview

This application was the result of my react-native learning phase, I wanted to use react-native to make some application so have some hands on knowledge about how the framewrk works. This appliction was made by keeping in mind the problems faced by students or developers trying to learn new skill or some framework, there are 
lot of sources but to screen through these sources and select the best is a hassle and a time consuming process, what this application does is makes this process a little simpler. 

This application contains video lectures of some of the popular framworks and technologies that i have selcted, I wanted to use the content that is freely available so I choose youtube as it has its API available it made my job easier.

## Features 

1) User authentication.
2) Curated Content.
3) Stream Content on the app itself no need to redirect to youtube.

## Technology Used

This appliction is a beginner react-native application, It was made to use some basic react-native tools like creating screens and basic naviagtion. For the user authentication I have used the fire base's email authentication. I wanted to add some more steps like email confirmation or OTP confirmation but decided that this was too basic app to make that kind of Encryption.

For retriving the data form youtube I have used the youtube's API to fetch the videos details and then passed it to the react-native youtube component to play video.

## Working 

First you had to login using your email and password if you had not signed up you can sing up, it will navigate you to the sign up page where you can provide the deatails.
![image](https://user-images.githubusercontent.com/49595116/115691413-a89b7f80-a37b-11eb-850b-38706326cd48.png =200X200)

After signing in you would see list of cureted courses available for you to choose from if you want to learn Data structures and Algorithms then you can click on that perticular course and it will navigate you to its screen and will provide the lecutures or number of videos available in that course, you can choose whichever you want to see and it will start playing. Enjoy Learning!
![image](https://user-images.githubusercontent.com/49595116/115691843-09c35300-a37c-11eb-899a-91c47a1a1c01.png)
![image](https://user-images.githubusercontent.com/49595116/115691862-0def7080-a37c-11eb-91ec-a706dff1b9e6.png)
![image](https://user-images.githubusercontent.com/49595116/115691895-134cbb00-a37c-11eb-9e12-52f2c2cfafc1.png)


## Further Improvemets
1) Add a personal notes section for every lecture.
2) Add a comment section for asking doubts and clarification
3) Add upvote and downvote and implement the liking percentage meter for course.
4) Move the json-data file to firebase.



