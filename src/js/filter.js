// import fetchSpecificTeamData from "./filterData.js";
filterTeam();

function filterTeam() {
  const form = document.getElementById("favoTeam");

  form.addEventListener("change", () => {
    const value = form.value;
    fetchSpecificTeamData(value);
  });
}
