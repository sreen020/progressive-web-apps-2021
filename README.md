## Description

In my <a href="https://github.com/sreen020/NBA-WEBAPP" target="_blank">previous repository</a> I made a vanilla javascript single-page application. In this project is rebuild this application to a progressive web app. A PWA is an application which can be accessed without internet connection (only if the user visited this website before). A PWA can also be used to send push-notifications. By making this a PWA the user-feeling of this app has gotten much more an app feeling.

## Jobstory
I (user) want to have an overview of all played games. I like to talk about game results with other people. When i’m in a metro or plane I don’t have internet connection to see the results, I want to select which games or teams I want to see without internet.

**Screenshots app:** <br>
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/screenshot-games.png" width="300">
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/screenshot-game.png" width="300">
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/screenshot-favo.png" width="300">

Getting interested? Take a look!

## Live link
**For the best performance visit the app on your phone**<br>
https://nba-pwa-sreen.herokuapp.com/

## Install

**Clone folder**<br>
Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. Example:

cd/Desktop/projects/

Then type the following line of code into your terminal:
```
git clone git@github.com:sreen020/progressive-web-apps-2021.git
```

3. Installation
Go to the repository in the terminal and add the following line of code below:
This wil install al packages and middleware

```
npm install
```

4. Start server and run the code
```
npm run watch
```
Now you can open http://localhost:3000/ in your browser to view the web application.

## Usage
- EJS
- Express
- Gulp 
- Node-fetch
- Compression
- Chokidar-cli

## Folder structure

<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/folder.png" width="300">


## API
This API contains information about the most popular basketball league, the NBA. Within this API there is a lot of data. Data from each player, data from each team and data from each game. 

This is a snipped of the JSON I get back from the API. This example shows how I recieve the game data.
```
0:{
  "id":47179
  "date":"2019-01-30T00:00:00.000Z"
  "home_team": {
    "id":2
    "abbreviation":"BOS"
    "city":"Boston"
    "conference":"East"
    "division":"Atlantic"
    "full_name":"Boston Celtics"
    "name":"Celtics"
  }
  "home_team_score":126
  "period":4
  "postseason":false
  "season":2018
  "status":"Final"
  "time":" "
  "visitor_team": {
    "id":4
    "abbreviation":"CHA"
    "city":"Charlotte"
    "conference":"East"
    "division":"Southeast"
    "full_name":"Charlotte Hornets"
    "name":"Hornets"
}
  "visitor_team_score":94
}
```
There are more APIs who can get this data but most of them aren’t free. This one is!
To find out more about this API, read more on:
https://rapidapi.com/theapiguy/api/free-nba/details

## Future features

**Click to cache**
Right now, when the user clicks on a page this page will be cached for offline usage. The next step is to let the user choose what and when to cache. Examples:
- Let the user choose their favorite team and cache all games of that team
- Let the user click a heart icon to like a game, the liked games will be cached 
If I had a little more time I would have build this. :(

**Live stats**
- Within this API I’m not able to collect current / live data. There are some API’s which can. It would make this app a lot better if this was build-in.

**Notifications**
- Right now, there is not a good reason to use notifications. Maybe in the future there is… I would like to work with things like web sockets.

**Using image resizing tools (Sharp)** 
The sharp package is a good choice for automating image resizing (for example, generating multiple sizes of thumbnails for all the videos on your website). It is fast and easily integrated with build scripts and tools. On the other hand, ImageMagick is convenient for one-off image resizing because it is used entirely from the command line.




