import type { SoccerPredictions } from '$lib/ts/tippspiel/types';
import { getKvClient } from '$lib/server/kvClient';
import type { CustomOdds } from '$lib/ts/tippspiel/types';
import { serverConfig } from '$lib/server/config/serverConfig';

export async function getSoccerPredictions(): Promise<SoccerPredictions> {
  const customOdds = await getKvClient().get<CustomOdds>(serverConfig.tippspiel.oddsRedisKey);

  if (!customOdds) {
    return {};
  }

  const predictions: SoccerPredictions = {};

  for (const [matchId, matchOdds] of Object.entries(customOdds)) {
    try {
      const [team1Prediction, team2Prediction] = calculateMatchPrediction(
        matchOdds.teamHome.value,
        matchOdds.teamAway.value
      );

      predictions[matchId] = {
        teamHome: {
          teamName: matchOdds.teamHome.teamName,
          value: team1Prediction,
        },
        teamAway: {
          teamName: matchOdds.teamAway.teamName,
          value: team2Prediction,
        },
      };
    } catch (e) {
      /* empty */
    }
  }

  return predictions;
}

function calculateMatchPrediction(team1Odds: number, team2Odds: number): number[] {
  if (Math.abs(team1Odds - team2Odds) < 0.5) {
    return [1, 1];
  }

  if (team1Odds > team2Odds) {
    if (team1Odds - team2Odds < 4) {
      return [1, 2];
    }

    return [1, 3];
  }

  if (team2Odds - team1Odds < 4) {
    return [2, 1];
  }

  return [3, 1];
}
