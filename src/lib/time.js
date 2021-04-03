// convert seconds to hours
export const secToHours = (seconds) => {
  const hours = seconds / (60 * 60);

  if (hours % 1 === 0) {
    return hours;
  }

  return Number(hours.toFixed(2));
};

// UTC string (e.g. +3 UTC, -9 UTC)
export const strUTC = (val) => {
  return val > 0 ? `+${val} UTC` : val < 0 ? `${val} UTC` : '0 UTC';
};

// convert unix time to str 00:00 (UTC, shift in seconds)
export const strHMUTC = (unixtime, shift) => {
  const timestamp = shift ? unixtime + shift : unixtime;
  const date = new Date(timestamp * 1000);

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
