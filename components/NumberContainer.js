import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NumberContainer = (props) =>{
    return(
        <View styles = {styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            borderWidth:2,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            padding:10,
            backgroundColor:'#c717fc',

        },

        number:{
            color:'#c717fc',
            fontSize:22
        }
    }
)

export default NumberContainer;
