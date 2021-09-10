import React from "react";
import {View, StyleSheet} from 'react-native';

const Card = props =>{
    return(
        <View style={{...styles.card,...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create(
    {
        card:{
            marginTop:10,
            borderWidth:1,
            elevation:8,
            width:300,
            maxWidth:'80%',
            alignItems:'center',
            shadowColor:'white',
            backgroundColor:'white',
            borderRadius:10,
        }
    }
)

export default Card;


