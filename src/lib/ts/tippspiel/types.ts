export interface LeagueTeam {
  teamId: number;
  teamName: string;
  shortName: string;
  teamIconUrl: string;
}

export interface LeagueGroup {
  groupID: number;
  groupName: string;
}

export interface LeagueMatch {
  matchID: number;
  group: LeagueGroup;
  team1: LeagueTeam;
  team2: LeagueTeam;
  matchDateTimeUTC: string;
  matchIsFinished: boolean;
}

export interface LeagueMatchDay {
  name: string;
  matches: LeagueMatch[];
}

export interface CustomOdds {
  [matchId: string]: {
    teamHome: CustomOddsTeam;
    teamAway: CustomOddsTeam;
  };
}

export interface CustomOddsTeam {
  teamName: string;
  value: number;
}

export interface SoccerPredictions {
  [matchId: string]: {
    teamHome: SoccerPredictionTeam;
    teamAway: SoccerPredictionTeam;
  };
}

export interface SoccerPredictionTeam {
  teamName: string;
  value: number;
}
