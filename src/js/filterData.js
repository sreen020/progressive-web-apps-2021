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
