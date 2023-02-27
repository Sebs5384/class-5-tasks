const videoTime = document.querySelector("#inputs-form");
const totalDuration = document.querySelector("#total-duration");

document.querySelector("#button-calculate").onclick = function () {
  const hours = videoTime.hours;
  const minutes = videoTime.minutes;
  const seconds = videoTime.seconds;
  if (validateVideoTime(hours, minutes, seconds) !== "videoTimeValidated") {
    return;
  }
  const durationResults = calculateVideoTime(hours, minutes, seconds);
  totalDuration.textContent = durationResults;
};

function calculateVideoTime(hours, minutes, seconds) {
  let totalTime = 0;
  for (let i = 0; i < hours.length; i++) {
    const $hours = Number(hours[i].value || 0);
    totalTime += $hours * 3600;
  }
  for (let i = 0; i < minutes.length; i++) {
    const $minutes = Number(minutes[i].value || 0);
    totalTime += $minutes * 60;
  }
  for (let i = 0; i < seconds.length; i++) {
    const $seconds = Number(seconds[i].value || 0);
    totalTime += $seconds;
  }
  const totalHours = Math.floor(totalTime / 3600);
  const totalMinutes = Math.floor((totalTime % 3600) / 60);
  const totalSeconds = totalTime % 60;
  return `${totalHours} hours ${totalMinutes} minutes and ${totalSeconds} seconds`;
}
