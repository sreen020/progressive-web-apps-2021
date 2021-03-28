// When the user clicks their favorite team the data of that specific team wille be fetched. 
// This function will fill the data into a text element. 
// each time the user presses a team, this function will be called

function fillFilteredData(data) {
  const nameHome = document.getElementById("name-home");
  const nameVisitors = document.getElementById("name-visitors");

  const scoreHome = document.getElementById("score-home");
  const scoreVisitors = document.getElementById("score-visitors");

  const fullnameHome = document.getElementById("fullname-home");
  const fullnameVisitors = document.getElementById("fullname-visitors");

  const cityHome = document.getElementById("city-home");
  const cityVisitors = document.getElementById("city-visitors");

  const conferenceHome = document.getElementById("conference-home");
  const conferenceVisitors = document.getElementById("conference-visitors");

  const divisionHome = document.getElementById("division-home");
  const divisionVisitors = document.getElementById("division-visitors");

  nameHome.innerText = data.home_team.name;
  nameVisitors.innerText = data.visitor_team.name;

  scoreHome.innerText = data.home_team_score;
  scoreVisitors.innerText = data.visitor_team_score;

  fullnameHome.innerText = data.home_team.full_name;
  fullnameVisitors.innerText = data.visitor_team.full_name;

  cityHome.innerText = data.home_team.city;
  cityVisitors.innerText = data.visitor_team.city;

  conferenceHome.innerText = data.home_team.conference;
  conferenceVisitors.innerText = data.visitor_team.conference;

  divisionHome.innerText = data.home_team.division;
  divisionVisitors.innerText = data.visitor_team.division;
}
