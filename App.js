import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';
import GameOverScreen from '../component-styling-layout/screen/GameOverScreen';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [round, setRound] = useState(0);
  const [dataLoad, setDataLoad] = useState(false)

 

  if (!dataLoad) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoad(true)}
        onError={console.warn}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }



  const resetHandler = () => {
    setUserNumber(null);
    setRound(0);
  }

  const gameOverHandler = (myround) => {
    setRound(myround);
  }
  console.log(round)
  let content = <StartGameScreen startGameHandler={startGameHandler}></StartGameScreen>


  if (userNumber && round <= 0) {
    content = <GameScreen userChoice={userNumber} gameOver={gameOverHandler} />
  } else if (round > 0) {
    content = <GameOverScreen roundNo={round} userNo={userNumber} resetHandler={resetHandler} />
  }

  console.log(userNumber)
  return (
    <View style={styles.screen}>

      <Header title='Guess a Number'></Header>

      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

  },
});
