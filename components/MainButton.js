import React from "react"
import { View,Text, TouchableOpacity,StyleSheet } from "react-native"
import Color from "../constant/Color"

const MainButton = (props)=>{
    return(
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{

        backgroundColor:Color.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,

    },
    buttonText:{
        color:'white',
        fontFamily:'open-sans'
    }
})

export default MainButton;