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

// import fetchSpecificTeamData from "./filterData.js";
filterTeam();

function filterTeam() {
  const form = document.getElementById("favoTeam");

  form.addEventListener("change", () => {
    const value = form.value;
    fetchSpecificTeamData(value);
  });
}

// import fillFilteredData from "./fillData.js";

function fetchSpecificTeamData(value) {
  fetch(`https://free-nba.p.rapidapi.com/games/${value}`, {
    method: "GET",
    headers: {
      "x-rapidapi-key": "85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((json) => fillFilteredData(json));
}
