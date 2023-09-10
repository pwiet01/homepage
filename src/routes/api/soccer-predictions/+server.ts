import { getSoccerPredictions } from '$lib/ts/tippspiel/predictions';
import { json } from '@sveltejs/kit';

export async function GET() {
  const predictions = await getSoccerPredictions();
  const response: { [teamName: string]: number }[] = [];

  for (const prediction of Object.values(predictions)) {
    response.push({
      [prediction.teamHome.teamName]: prediction.teamHome.value,
      [prediction.teamAway.teamName]: prediction.teamAway.value,
    });
  }

  return json(response);
}
