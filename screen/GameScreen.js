import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generadeRanndomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generadeRanndomNumber(min, max, exclude)
    } else {
        return parseInt(rndNum);
    }


}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generadeRanndomNumber(1, 100, props.userChoice)
    )

    return (
        <View style={styles.screen}>
            <Text>Opponent Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <TouchableOpacity><Text style={styles.buttonColorPrimary}>Lower</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.buttonColorAccent}>Greater</Text></TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        screen: {
            flex:1,
            padding: 10,
            alignItems: "center",
          },
        
          buttonContainer: {
            flexDirection: 'row',
            width:'80%',
            height:100,
            justifyContent: 'space-around'
           
          },
          buttonColorPrimary: {
            color: '#c717fc'
        },
        buttonColorAccent: {
            color: '#f7287b',
        },
    }
)

export default GameScreen;