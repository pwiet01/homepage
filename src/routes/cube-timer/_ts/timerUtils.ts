import type { CubeTimerSolve } from './types';

export function formatMs(ms: number | undefined): string {
  if (ms == undefined) {
    return '-';
  }

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

export function calculateAverage(solves: CubeTimerSolve[]): number | undefined {
  if (solves.length < 3) {
    return undefined;
  }

  let times = solves.map((solve) => solve.single);

  const min = times.indexOf(Math.min(...times));
  const max = times.indexOf(Math.max(...times));

  if (min === max) {
    return times[0];
  }

  times = times.filter((_, index) => index !== min && index !== max);
  const sum = times.reduce((a, b) => a + b, 0);

  return sum / times.length;
}
