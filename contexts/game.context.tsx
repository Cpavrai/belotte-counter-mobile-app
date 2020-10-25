import React from 'react';
import SessionType from '../models/Session';

export const GameContextInitalState: SessionType = {
  teams: [
    {
      name: "Équipe n°1",
      score: 0
    }, {
      name: "Équipe n°2",
      score: 0
    }
  ],
  scoreMax: 1000,
  setSession: () => {}
};

export const GameContext = React.createContext(GameContextInitalState);
