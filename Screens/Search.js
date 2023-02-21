/* eslint-disable prettier/prettier */ /* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-alert */ /* eslint-disable quotes */
import React, {useState} from 'react';
import {Dimensions, SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,Pressable,Image,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Search({navigation, route}) {
  let height = Dimensions.get('window').height;
  let width = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundImage: 'linear-gradient(black, #93e9ff)',
    },
    div: {
        backgroundColor: '#fff',
        width: width * 0.9,
        padding: 27,
        marginTop: 20,
        borderRadius: 10,
    },
    txt: {
      fontSize: 20,
      color: 'darkGrey',
    },
    txtTitle: {
      fontSize: 25,
      color: '#232323',
    },
    txtInput: {
      fontSize: 20,
      color: '#f4f4f4',
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#F50057',
        paddingHorizontal: 32,
        paddingVertical: 8,
        borderRadius: 4,
    },
    buttonTxt: {
        color: '#fff',
        fontSize: 15,
    },
    image:{
        width: width * 0.8,
        height:300,
        resizeMode:"contain",
        alignSelf: 'center'
    },
  });

  return (
    <>

    </>
  );
}
