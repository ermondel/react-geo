// convert seconds to hours
export const secondsToHours = (seconds) => {
  const hours = seconds / (60 * 60);

  if (hours % 1 === 0) {
    return String(hours);
  }

  return hours.toFixed(2);
};

// convert seconds (shift in seconds from UTC) to hours (e.g. +3 UTC, -9 UTC)
export const timezoneSecondsToHours = (seconds) => {
  const hours = secondsToHours(seconds);

  if (hours > 0) {
    return `+${hours} UTC`;
  } else if (hours < 0) {
    return `${hours} UTC`;
  } else {
    return '0 UTC';
  }
};

// convert unix time to 00:00 (UTC and shift in seconds)
export const unixTimeToHM = (unixtime) => {
  const date = new Date(unixtime * 1000);

  let hours = String(date.getUTCHours());
  let minutes = String(date.getUTCMinutes());

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  return `${hours}:${minutes}`;
};
