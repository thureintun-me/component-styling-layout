import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props)=>{
    return(
        <Text style={{...props.style,...style.title}}>{props.children}</Text>
    )
   
}

const style = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
    }
})

export default TitleText;