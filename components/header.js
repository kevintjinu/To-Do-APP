import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity,} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
             To-Do's
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
header: { 
    height:60,
    paddingTop:20,
    backgroundColor:'coral'
 },
 title :{
     textAlign: 'center',
     color: 'white',
     fontSize:20,
     fontWeight: 'bold', 
 }
});