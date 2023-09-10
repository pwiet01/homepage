import type { LeagueMatch, LeagueMatchDay, LeagueTeam } from './types';

export async function getCurrentMatchDay(svelteFetch: typeof fetch): Promise<LeagueMatchDay> {
  try {
    const apiResponse = await svelteFetch(`${getBaseUri()}/getmatchdata/bl1`);
    const matches: LeagueMatch[] = await apiResponse.json();

    return {
      name: matches[0]?.group?.groupName ?? '-',
      matches: matches,
    };
  } catch (e) {
    /* empty */
  }

  return {
    name: '/',
    matches: [],
  };
}

export async function getAvailableTeams(
  svelteFetch: typeof fetch,
  season: string
): Promise<LeagueTeam[]> {
  try {
    const apiResponse = await svelteFetch(`${getBaseUri()}/getavailableteams/bl1/${season}`);

    return apiResponse.json();
  } catch (e) {
    /* empty */
  }

  return [];
}

function getBaseUri(): string {
  return 'https://api.openligadb.de';
}
