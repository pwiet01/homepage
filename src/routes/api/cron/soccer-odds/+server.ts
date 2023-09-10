import { json } from '@sveltejs/kit';
import type { OddsApiMatch } from './_ts/types';
import { getCurrentOdds } from './_ts/oddsApi';
import { getCustomOdds } from './_ts/customOdds';
import { getKvClient } from '$lib/server/kvClient';
import type { CustomOdds } from '$lib/ts/tippspiel/types';
import { serverConfig } from '$lib/server/config/serverConfig';

export async function GET() {
  const oddsApiMatches: OddsApiMatch[] = await getCurrentOdds();
  const kv = getKvClient();

  const oldCustomOdds = (await kv.get<CustomOdds>(serverConfig.tippspiel.oddsRedisKey)) ?? {};
  const newCustomOdds = await getCustomOdds(oldCustomOdds, oddsApiMatches);

  await kv.set<CustomOdds>(serverConfig.tippspiel.oddsRedisKey, newCustomOdds);
  return json(newCustomOdds);
}
