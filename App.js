import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import StartGameScreen from './screen/StartGameScreen';
import GameScreen from './screen/GameScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  let content = <StartGameScreen startGameHandler={startGameHandler}></StartGameScreen>

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />
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
