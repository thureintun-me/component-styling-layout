import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Touchable, TouchableOpacity, Alert, Image } from "react-native";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText"
import Color from "../constant/Color";


const GameOverScreen = (props) => {
    return (
        <View style={styles.container}>

            <TitleText>The Game Over Screen</TitleText>
            <View style={styles.imageContainer}>
                <Image resizeMode="cover"
                    source={require('../assets/success.png')} style={styles.image} />
            </View>
            <View style={styles.resultContainer}>
            <BodyText style={styles.resultText}>
                Your phone need{" "}
                <Text style={styles.highlight}>{props.roundNo}</Text> rounds to
                guess the number{" "}
                <Text style={styles.highlight}>{props.userNo}</Text>
            </BodyText>
            </View>
            

            <MainButton onPress={props.resetHandler}>New Game</MainButton>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        image: {
            alignItems: 'center',
            width: 300,
            height: 300,
            borderRadius: 300 / 2,
            borderWidth: 3,
            borderColor: 'black'
        },
        imageContainer:{
            marginVertical:30,
        },
        highlight: {
            color: Color.primary,
            fontFamily: "open-sans-bold",
        },
        resultContainer:{
            marginVertical:25,
            marginHorizontal:30,
        },
        resultText:{
            textAlign:'center',
            fontSize:20,
        }
    }
)

export default GameOverScreen;