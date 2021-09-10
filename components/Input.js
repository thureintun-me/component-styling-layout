import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = props=>{
    return(
        <TextInput {...props} style={{...style.input,...props.style}}></TextInput>
    )
}

const style = StyleSheet.create(
    {
        input:{
            height:50,
            marginVertical:10,
            borderBottomColor:'black',
            borderBottomWidth:1,
            
        }
    }
)

export default Input;