import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity, Button, Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import Card from '../components/Card'
import Color from '../constant/Color'
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";
import DefaultSyles from "../constant/DefaultSyles";

const StartGameScreen = (props) => {
    const [enterValue, setEnterValue] = useState("");
    const [confimred, setConfirmed] = useState(false);
    const [selectNumber, setSelectNumber] = useState()

    const numberInputHandler = (inputText) => {
        setEnterValue(inputText.replace(/[^0-9]g/, ""));
    };

    const reset = () => setEnterValue("");
    const confirmInputHandler = () => {
        const chooseNumber = parseInt(enterValue);
        if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
            Alert.alert(
                "Invalid Number!",
                "Number has to be between 1 and 99"
                [{ text: 'okay', onPress: reset }]
            )
        }
        setConfirmed(true);
        setSelectNumber(chooseNumber);
        setEnterValue("");
    }



    let conifrmedOutput;
    if (confimred) {
        conifrmedOutput=(<Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer>{selectNumber}</NumberContainer>
            <MainButton onPress={() =>props.startGameHandler(selectNumber)}>Start Game</MainButton>
            
            
        </Card>
        );
       
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={DefaultSyles.bodyTexT}>Start a new game</Text>
                <Card>
                    <Text style={DefaultSyles.title}>Select A Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enterValue}

                    />
                    <View style={styles.buttonContainer}>
                        <MainButton onPress={reset}>Reset</MainButton>
                        <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
                       

                    </View>
                </Card>
                {conifrmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create(
    {
        screen: {
            flex: 1,
            alignItems: 'center',
            padding: 10
        },
        title: {
            fontSize: 30,

        },
        inputContainer: {
            marginTop: 10,
            borderWidth: 1,
            elevation: 5,
            width: 300,
            maxWidth: '80%',
            alignItems: 'center',
            shadowColor: 'white',
            backgroundColor: 'white',
            borderRadius: 10,
        },
        buttonContainer: {
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around'
        },
        input: {
            width: 50,
            textAlign: 'center'
        },
        buttonColorPrimary: {
            color: '#c717fc'
        },
        buttonColorAccent: {
            color: '#f7287b',
        },
        summaryContainer: {
            marginTop: 20,
            alignItems: 'center'
        }
    }
)

export default StartGameScreen;