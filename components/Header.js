import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "../constant/Color";


const Header = (props)=>{
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
       header:{
           
           backgroundColor:'#f7287b',
           paddingTop:10,
           height:100,
           justifyContent:'center',
           alignItems:'center' 
           
       } ,
       headerTitle:{
           color:'black',
           fontSize:18,
           fontFamily:'open-sans-bold'
       }
    }
)

export default Header;