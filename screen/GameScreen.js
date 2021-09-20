import React, { useState,useRef,useEffect } from "react";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity,Alert } from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import Color from "../constant/Color";
import MainButton from "../components/MainButton";


const genereadeRandomNumber = (min, max, exclude) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return genereadeRandomNumber(min, max, exclude)
    } else {
        return rndNum;

    }
}





const GameScrren = (props) => {

    const [currentGuess, setCurrentGuess] = useState(
        genereadeRandomNumber(1, 100, props.userChoice)
    )
    const [round,setRound] = useState(0);
    const currentLow = useRef(1)
    const currentHeight = useRef(100)
    

    useEffect (()=>{
        if(currentGuess===props.userChoice){
            props.gameOver(round)
        }
    },[currentGuess,props]
    
    )

const guestHandler = (direction)=>{
   

    if (
        (direction === "lower" && currentGuess < props.userChoice) ||
        (direction === "greater" && currentGuess > props.userChoice)
      ) {
        Alert.alert("Don't lie!", "You know that is wrong...", [
          { text: "Sorry!", style: "cancel" },
        ]);
        return;
      }

       if(direction==='lower'){
           currentHeight.current = currentGuess;
       }else{
           currentLow.current = currentGuess;
       }

        const nextCurrentGuess = genereadeRandomNumber( currentHeight.current,currentLow.current,currentGuess );
        setCurrentGuess(nextCurrentGuess)
        setRound(round+1);


}

    return (
        <View style={styles.screen}>
            <Text>Opponent Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={()=>guestHandler("lower")}>
                    Lower
                </MainButton>
                <MainButton onPress={()=>guestHandler("greater")}>
                    Greater
                </MainButton>
               

            </Card>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        screen: {
           width:'100%',
            padding: 10,
            alignItems: 'center'
        },
        buttonContainer: {
            
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
            width: 300,
            height:100,
            maxWidth: "80%",

        }
    }
)

export default GameScrren;