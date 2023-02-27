function validateVideoTime(hours, minutes, seconds) {
  for (let i = 0; i < hours.length; i++) {
    const $hours = Number(hours[i].value);
    if (validateVideoHours($hours) !== "hoursValidated") {
      return alert(`Invalid input at video-hours, Input#${i + 1} Value:(${$hours})`);
    }
  }
  for (let i = 0; i < minutes.length; i++) {
    const $minutes = Number(minutes[i].value);
    if (validateVideoMinutes($minutes) !== "minutesValidated") {
      return alert(`Invalid input at video-minutes, Input#${i + 1} Value:(${$minutes})`);
    }
  }
  for (let i = 0; i < seconds.length; i++) {
    const $seconds = Number(seconds[i].value);
    if (validateVideoSeconds($seconds) !== "secondsValidated") {
      return alert(`Invalid input at video-seconds, Input#${i + 1} Value:(${$seconds})`);
    }
  }
  return "videoTimeValidated";
}

function validateVideoHours(hours) {
  if (isNaN(hours)) {
    return "Hours is not a number";
  }
  if (hours < 0) {
    return "Hours is a negative number";
  }
  if (hours % 1 !== 0) {
    return "Hours is a decimal number";
  }

  return "hoursValidated";
}

function validateVideoMinutes(minutes) {
  if (isNaN(minutes)) {
    return "Minutes is not a number";
  }
  if (minutes < 0) {
    return "Minutes is a negative number";
  }
  if (minutes % 1 !== 0) {
    return "Minutes is not handling decimals correctly";
  }
  return "minutesValidated";
}

function validateVideoSeconds(seconds) {
  if (isNaN(seconds)) {
    return "Seconds is not a number";
  }
  if (seconds < 0) {
    return "Seconds is a negative number";
  }
  if (seconds % 1 !== 0) {
    return "Seconds is not handling decimals correctly";
  }
  return "secondsValidated";
}
