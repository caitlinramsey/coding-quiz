const scores = JSON.parse(localStorage.getItem("scores"));
const scoresList = document.getElementById("scores-list")
if(scores) {
  for (let i = 0; i < scores.length; i++) {
    const score = scores[i];
    const li = document.createElement("li");
    li.innerHTML = score.initials + " - " + score.seconds
    scoresList.appendChild(li);
  }

}

document.getElementById('clear-high-scores').onclick = function() {
  localStorage.removeItem("scores");
  scoresList.remove();
}

document.getElementById('go-back').onclick = function() {
  window.location.href = "./index.html";
}


