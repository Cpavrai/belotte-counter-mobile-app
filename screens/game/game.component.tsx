import React from "react";
import { View, TextInput, Text } from "react-native";
import Style from "./game.style";
import { GameContext } from "../../contexts/game.context";

const GameComponent = ({ navigation: { navigate } }) => {

  return (
    <GameContext.Consumer>
      {({ teams, scoreMax }) => (
        <View style={Style.container}>
          <View style={{}}>
            <Text>{teams[0].name} : {teams[0].score}</Text>
            <Text>{teams[1].name} : {teams[1].score}</Text>
            <Text>Score max : {scoreMax}</Text>
          </View>
        </View>
      )}
    </GameContext.Consumer>
  );
};

export default GameComponent;