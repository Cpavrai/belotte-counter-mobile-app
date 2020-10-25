import React, { useState } from "react";
import { View, Image, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView, Platform, Text } from "react-native";
import Style from "./home.style";
import HomeFunctions from "./home.functions";
import { GameContext } from "../../contexts/game.context";

const HomeComponent = ({ navigation: { navigate } }) => {
  let secondTeamNameInput: TextInput, scoreMaxInput: TextInput;
  const [firstTeamName, setFirstTeamName] = useState("Équipe n°1");
  const [secondTeamName, setSecondTeamName] = useState("Équipe n°2");
  const [scoreMax, setScoreMax] = useState(1000);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={Style.keyboardAvoidingView}>
      <GameContext.Consumer>
        {({ setSession }) => (
          <TouchableOpacity
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            onPress={() => Keyboard.dismiss()}
            activeOpacity={1}
          >
            <View style={Style.container}>
              <Image
                source={require("../../assets/cards.png")}
                style={Style.image}
              ></Image>
              <View style={{flex: 0.5, width: "100%", alignItems: "center"}}>
                <TextInput
                    style={{ ...Style.font, ...Style.input }}
                    value={firstTeamName}
                    placeholder={"Nom de la première équipe"}
                    onChangeText={(text) => setFirstTeamName(text)}
                    enablesReturnKeyAutomatically
                    clearButtonMode="while-editing"
                    onSubmitEditing={() => secondTeamNameInput.focus()}
                    autoCapitalize="none"
                    returnKeyType="next"
                  >
                </TextInput>
                <TextInput
                    style={{ ...Style.font, ...Style.input }}
                    value={secondTeamName}
                    placeholder={"Nom de la deuxième équipe"}
                    onChangeText={(text) => setSecondTeamName(text)}
                    enablesReturnKeyAutomatically
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    returnKeyType="next"
                    ref={(input) => {
                      secondTeamNameInput = input;
                    }}
                    onSubmitEditing={() => scoreMaxInput.focus()}
                  >
                </TextInput>
                <TextInput
                    style={{ ...Style.font, ...Style.input }}
                    value={scoreMax.toString()}
                    keyboardType={'numeric'}
                    placeholder={"Nombre de point de la partie"}
                    onChangeText={(text) => setScoreMax(parseInt(text))}
                    enablesReturnKeyAutomatically
                    clearButtonMode="while-editing"
                    autoCapitalize="none"
                    returnKeyType="go"
                    ref={(input) => {
                      scoreMaxInput = input;
                    }}
                    onSubmitEditing={() => HomeFunctions.startGame(setSession, {teams: [{name: firstTeamName, score: 0},{name: secondTeamName, score: 0}], scoreMax: scoreMax}, navigate)}
                  >
                </TextInput>
                <TouchableOpacity onPress={() => HomeFunctions.startGame(setSession, {teams: [{name: firstTeamName, score: 0},{name: secondTeamName, score: 0}], scoreMax: scoreMax}, navigate)} style={{ ...Style.font, ...Style.input, ...Style.button }}>
                  <Text style={Style.buttonText}>Lancer la partie</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </GameContext.Consumer>
    </KeyboardAvoidingView>
  );
};

export default HomeComponent;