import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity, Alert } from "react-native";
import Card from "../components/Card";
import NumberContainer from "../components/NumberContainer";

const generadeRanndomNumber = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generadeRanndomNumber(min, max, exclude)
    } else {
        return rndNum;
    }


}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generadeRanndomNumber(1, 100, props.userChoice)
    )
    const highRef = useRef(100)
    const lowRef = useRef(1);


    const lowerGreaterHandler = (input) => {
       

        if ((input === 'Lower' && props.userChoice > currentGuess) ||
            (input === 'Upper' && props.userChoice < currentGuess)) {
            Alert.alert(
                "Don't lie",
                "You know it is wrong",
                [{ text: 'Cancel' }]
            )
            return;
        }


        if (input === 'Lower') {
            highRef.current = currentGuess;
        } else {
            lowRef.current = currentGuess;
        }
        const nextCurrentGuess = generadeRanndomNumber(highRef.current, lowRef.current, props.userChoice);
        setCurrentGuess(nextCurrentGuess);
    }

    return (
        <View style={styles.screen}>
            <Text>Opponent Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => lowerGreaterHandler("Lower")}><Text style={styles.buttonColorPrimary}>Lower</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => lowerGreaterHandler("Upper")}><Text style={styles.buttonColorAccent}>Greater</Text></TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            padding: 10,
            alignItems: "center",
        },

        buttonContainer: {
            flexDirection: 'row',
            width: '80%',
            height: 100,
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