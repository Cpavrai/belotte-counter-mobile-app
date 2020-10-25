import TeamType from "./Team";

export interface SessionType {
  teams: Array<TeamType>;
  scoreMax: number;
  setSession: Function;
};

export default SessionType;
