import React, {useState} from 'react';
import {StyleSheet,Text, View, TouchableOpacity,FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function TodoItem({item,pressHandler}){

return(
    <TouchableOpacity onPress={()=> pressHandler(item.key)} >
        <View style={styles.item}>
        <Icon name="delete" size={30} color="orange" />
        <Text style={styles.text}>{item.text}</Text>  
        </View>
       
    </TouchableOpacity>
)

}

const styles = StyleSheet.create({
    item:{
        flexDirection: 'row',
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius:10
        , alignItems: 'center'
    },
    text:{
        marginLeft: 10,
       
        
    }
})