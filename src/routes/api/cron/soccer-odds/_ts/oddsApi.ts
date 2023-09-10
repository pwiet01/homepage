import type { OddsApiMatch } from './types';
import { ODDS_API_KEY } from '$env/static/private';

export async function getCurrentOdds(): Promise<OddsApiMatch[]> {
  try {
    const oddsApiResponse = await fetch(
      `${getOddsApiBaseUri()}/v4/sports/soccer_germany_bundesliga/odds?apiKey=${ODDS_API_KEY}&bookmakers=sport888`
    );

    return oddsApiResponse.json();
  } catch (e) {
    /* empty */
  }

  return [];
}

function getOddsApiBaseUri(): string {
  return 'https://api.the-odds-api.com/';
}
