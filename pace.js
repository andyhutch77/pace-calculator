export const KM_PER_MILE = 1.609344;

export function calculatePaces(distance, unit, hours, minutes, seconds) {
  if (!Number.isFinite(distance) || distance <= 0 ||
      !["km", "mi"].includes(unit) ||
      ![hours, minutes, seconds].every(Number.isSafeInteger) ||
      hours < 0 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    return null;
  }
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const kilometres = unit === "mi" ? distance * KM_PER_MILE : distance;
  const secondsPerKm = totalSeconds / kilometres;
  const secondsPerMile = secondsPerKm * KM_PER_MILE;
  if (totalSeconds <= 0 || !Number.isSafeInteger(totalSeconds) ||
      !Number.isFinite(kilometres) || !Number.isSafeInteger(Math.round(secondsPerKm)) ||
      !Number.isSafeInteger(Math.round(secondsPerMile))) {
    return null;
  }
  return { secondsPerKm, secondsPerMile, totalSeconds };
}

export function formatPace(seconds) {
  const rounded = Math.round(seconds);
  return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, "0")}`;
}

export function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return hours > 0
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}
