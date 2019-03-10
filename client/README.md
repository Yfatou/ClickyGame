# ClickyGame
A memory game buit with react. The ClickyGame UI has been broken up into components, manage component state, respond to user events.

## Description
This app will display Harry Potter themed images to the player. Each image will listen to click events. Everytime the player click on an image, images will shuffle randomly and displayed to the screen. The app will keeps track of the player's score and top score. The top score is replaced by the player's higher current score.

Click here https://yfatou.github.io/HPClickyGame/ to access to the deployed version of the app.

## How to play ClickyGame
Once the game starts, 12 Harry Potter themed images are displayed. The score and the top score of the player are at 0. To start the game, the user click on any image and start gaining points. After each click the images are shuffled. The player's score and top score are incremented until an already clicked card is clicked again. When the player click an already clicked card, a message is displayed, and the game restart. The current score is back to 0 and the top score will be the new higher score of the player.

![](clicky_demo1.gif)

If the player did not click any of the images twice, the game end a message "Yay you won" is displayed.

![](clicky_demo2.gif)

## How is this app built
The app is built with ReactJS.

## Technologies used
ReactJS
JSX
Node.js
Bootstrap
HTML
CSS

## How to setup the ClickyGame locally
To use this application from a local environment, the following steps will be necessary:

1. Make sure that Reactjs is installed on your machine.

2. Clone this repo using the command line on the terminal: git clone https://github.com/Yfatou/ClickyGame.git

3. Open the cloned repo in the terminal and create a new react app by typing create-react-app

4. Replace the src folder created by the one in the cloned repo

5. Start the application from the command line: npm start