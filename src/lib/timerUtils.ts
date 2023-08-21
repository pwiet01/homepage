export function formatMs(ms: number): string {
  const msRemainder = Math.floor((ms % 1000) / 10);

  const s = Math.floor(ms / 1000);
  const sRemainder = s % 60;

  const m = Math.floor(s / 60);
  const mRemainder = m % 60;

  const h = Math.floor(m / 60);

  // Milliseconds
  let timeString = msRemainder.toString().padStart(2, '0');

  // Seconds
  timeString = sRemainder.toString().padStart(m > 0 ? 2 : 1, '0') + '.' + timeString;

  //Minutes
  if (m > 0) {
    timeString = mRemainder.toString().padStart(h > 0 ? 2 : 1, '0') + ':' + timeString;
  }

  // Hours
  if (h > 0) {
    timeString = h.toString() + ':' + timeString;

    // Remove Milliseconds
    timeString = timeString.slice(0, -3);
  }

  return timeString;
}
