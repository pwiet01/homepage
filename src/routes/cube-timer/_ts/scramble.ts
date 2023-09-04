const opposite: { [key: string]: string } = {
  U: 'D',
  D: 'U',
  L: 'R',
  R: 'L',
  F: 'B',
  B: 'F',
};

const randomNum = (limit: number) => Math.floor(Math.random() * limit);
const removeIntersections = function (active: Set<string>, currentMove: string) {
  active.forEach((move) => {
    if (move !== currentMove && move !== opposite[currentMove]) active.delete(move);
  });
};

export function scramble() {
  const active = new Set<string>();
  const moves = ['U', 'D', 'L', 'R', 'F', 'B'];
  const endings = ['', "'", '2'];
  const scramble: string[] = [];
  let count = 0;

  while (count < 25) {
    const randMove = moves[randomNum(moves.length)];
    if ((scramble[count - 1] && scramble[count - 1].startsWith(randMove)) || active.has(randMove)) {
      continue;
    }

    active.add(randMove);
    const num = randomNum(endings.length);
    scramble.push(`${randMove}${endings[num]}`);
    removeIntersections(active, randMove);
    count++;
  }

  return scramble;
}
