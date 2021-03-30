## Description

In my <a href="https://github.com/sreen020/NBA-WEBAPP" target="_blank">previous repository</a> I made a vanilla javascript single-page application. In this project, I rebuild this application into a progressive web app. A PWA is an application that can be accessed without an internet connection (only if the user visited this website before). A PWA can also be used to send push notifications. By making this a PWA the user-feeling of this app has gotten much more an app feeling.

## Job story
I (user) want to have an overview of all played games. I like to talk about game results with other people. When I’m in a metro or plane I don’t have an internet connection to see the results, I want to select which games or teams I want to see without internet connection.

**Screenshots app:** <br>
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/screenshot-games.png" width="260">
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/screenshot-game.png" width="260">
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/screenshot-favo.png" width="260">

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
This will install all packages and middleware

```
npm install
```

4. Start the server and run the code
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
This API contains information about the most popular basketball league, the NBA. Within this API there is a lot of data. Data from each player, data from each team, and data from each game. 

This is a snippet of the JSON I get back from the API. This example shows how I receive the game data.
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
There are more APIs that can get this data but most of them aren’t free. This one is!
To find out more about this API, read more on:
https://rapidapi.com/theapiguy/api/free-nba/details

## Testing my application

**Lighthouse test** <br>
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/lighthouse.png" width="500">

**Using image resizing tools (Sharp)** <br>
The sharp package is a good choice for automating image resizing (for example, generating multiple sizes of thumbnails for all the videos on your website). It is fast and easily integrated with build scripts and tools. On the other hand, ImageMagick is convenient for one-off image resizing because it is used entirely from the command line.

Due to the large images is the performance 94. For now, this is okay but in future projects, I want to get the 100!

**Compression test** <br>
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/compression-test.png" width="500"><br><br><br>

**WebPageTest** <br>
<img src="https://github.com/sreen020/progressive-web-apps-2021/blob/master/public/img/github-images/webpagetest-result.png" width="700">

**First Contentful Paint - 1,4s** <br>
First Contentful Paint (FCP) is when the browser renders the first bit of content from the DOM, providing the first feedback to the user that the page is actually loading. The question "Is it happening?" is "yes" when the first contentful paint completes.

**Speed Index - 1,4 s** <br>
Speed Index measures how quickly content is visually displayed during page load. Lighthouse first captures a video of the page loading in the browser and computes the visual progression between frames.

**Largest Contentful Paint - 2,3s** <br>
Largest Contentful Paint (LCP) is a Core Web Vitals metric and measures when the largest content element in the viewport becomes visible. It can be used to determine when the main content of the page has finished rendering on the screen.

**Time to Interactive - 1,6 s** <br>
TTI measures how long it takes a page to become fully interactive. A page is considered fully interactive when the page displays useful content, which is measured by the First Contentful Paint, and event handlers are registered for most visible page elements.

**Total Blocking Time - 50 ms** <br>
The Total Blocking Time (TBT) metric measures the total amount of time between First Contentful Paint (FCP) and Time to Interactive (TTI) where the main thread was blocked for long enough to prevent input responsiveness.

**Cumulative Layout Shift - 0,51** <br>
CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.

In <a href="https://web.dev/cls/">this article</a> they talk about a good CLS score when it's under the 0.1. Mine is 0.5 so this is not good at all. Due to lack of time, I did not do good research on this topic but in future projects, I definitely will!

<a href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=1270&SI=1419&LCP=2339&TTI=1596&TBT=50&CLS=0.51&FMP=1382&FCI=1399&device=mobile&version=7"> Link to my test report </a>


## Future features

**Click to cache** <br>
Right now, when the user clicks on a page this page will be cached for offline usage. The next step is to let the user choose what and when to cache. Examples:
- Let the user choose their favorite team and cache all games of that team
- Let the user click a heart icon to like a game, the liked games will be cached 
If I had a little more time I would have built this. :(

**Offline page**
Instead of showing a regular 404 / offline page, I want to view the user a list of (pre-cached and by them cached) pages. These are the pages that are accessible offline.

**Live stats**
- Within this API I’m not able to collect current/live data. There are some APIs that can. It would make this app a lot better if this was build-in.

**Notifications**
- Right now, there is not a good reason to use notifications. Maybe in the future, there is… I would like to work with things like web sockets.







