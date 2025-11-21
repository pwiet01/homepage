import type { CustomOdds } from '$lib/ts/tippspiel/types';
import type { OddsApiMatch } from './types';
import { getCurrentMatchDay } from '$lib/ts/tippspiel/openLigaApi';

export const openLigaOddsTeamMapping: { [id: string]: string } = {
  199: '1. FC Heidenheim',
  65: '1. FC Köln',
  80: 'Union Berlin',
  81: 'FSV Mainz 05',
  6: 'Bayer Leverkusen',
  7: 'Borussia Dortmund',
  87: 'Borussia Monchengladbach',
  91: 'Eintracht Frankfurt',
  95: 'Augsburg',
  40: 'Bayern Munich',
  1635: 'RB Leipzig',
  112: 'SC Freiburg',
  118: 'SV Darmstadt 98',
  175: 'TSG Hoffenheim',
  16: 'VfB Stuttgart',
  129: 'VfL Bochum',
  131: 'VfL Wolfsburg',
  134: 'Werder Bremen',
  104: 'Holstein Kiel',
  98: 'FC St. Pauli',
  100: 'Hamburger SV',
};

export async function getCustomOdds(
  oldCustomOdds: CustomOdds,
  oddsApiMatches: OddsApiMatch[]
): Promise<CustomOdds> {
  const openLigaMatchDay = await getCurrentMatchDay(fetch);
  const newCustomOdds: CustomOdds = {};

  for (const openLigaMatch of openLigaMatchDay.matches) {
    try {
      if (openLigaMatch.matchIsFinished) {
        newCustomOdds[openLigaMatch.matchID] = oldCustomOdds[openLigaMatch.matchID];
        continue;
      }

      const oddsApiMatch = findOddsApiMatch(
        oddsApiMatches,
        openLigaMatch.team1.teamId,
        openLigaMatch.team2.teamId
      );

      if (!oddsApiMatch) {
        continue;
      }

      const outcomes = oddsApiMatch.bookmakers[0].markets[0].outcomes;

      newCustomOdds[openLigaMatch.matchID] = {
        teamHome: {
          teamName: openLigaMatch.team1.teamName,
          value: outcomes.find((outcome) => outcome.name === oddsApiMatch.home_team)?.price ?? 1,
        },
        teamAway: {
          teamName: openLigaMatch.team2.teamName,
          value: outcomes.find((outcome) => outcome.name === oddsApiMatch.away_team)?.price ?? 1,
        },
      };
    } catch (e) {
      /* empty */
    }
  }

  return newCustomOdds;
}

function findOddsApiMatch(
  oddsApiMatches: OddsApiMatch[],
  homeTeamId: number,
  awayTeamId: number
): OddsApiMatch | null {
  for (const oddsApiMatch of oddsApiMatches) {
    if (
      oddsApiMatch.home_team === openLigaOddsTeamMapping[homeTeamId] &&
      oddsApiMatch.away_team === openLigaOddsTeamMapping[awayTeamId]
    ) {
      return oddsApiMatch;
    }
  }

  return null;
}
