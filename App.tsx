import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppearanceProvider } from "react-native-appearance";

import React from 'react';
import { View } from 'react-native';
import Style from './App.style';
import {
  GameContext,
  GameContextInitalState,
} from "./contexts/game.context";

import GameComponent from "./screens/game/game.component";
import HomeComponent from "./screens/home/home.component";

export default function App() {
  const Stack = createStackNavigator();
  const gameContextValue = GameContextInitalState;
  gameContextValue.setSession = (data: Object) => {
    Object.keys(data).forEach((key) => {
      gameContextValue[key] = data[key];
    });
  };

  return (
    <GameContext.Provider value={gameContextValue}>
      <AppearanceProvider>
        <View style={Style.container}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeComponent}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Game"
                component={GameComponent}
                options={{
                  headerShown: false,
                }}
              />
              {/* <Stack.Screen
                name="Login"
                component={LoginComponent}
                options={() => ({
                  headerTitle: translate(userContextValue.language, "LOGIN"),
                  headerBackTitleVisible: false,
                })}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </AppearanceProvider>
    </GameContext.Provider>
  );
}
