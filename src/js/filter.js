filterTeam();

// each time the user changes the select option there will be a fetch called for that specific team
function filterTeam() {
  const form = document.getElementById("favoTeam");

  form.addEventListener("change", () => {
    const value = form.value;
    fetchSpecificTeamData(value);
  });
}
