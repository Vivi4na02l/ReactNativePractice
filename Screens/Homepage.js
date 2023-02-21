/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable quotes */
import React, {useState} from 'react';
import {Dimensions, SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,Pressable,Image,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import stations from './data/famel.json';
import { Card } from '@rneui/themed';

export function Home({navigation, route}) {
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

  let change = event => {
    navigation.navigate('Change');
  };

  return (
    <ScrollView>
        <TouchableOpacity style={{//backgroundColor: 'white',
                                  margin: 0,
                                  position: 'absolute',
                                  right: 0,
                                  top: 0,
                                  zIndex:10}}
                          onPress={change}>
            <MaterialCommunityIcons name="account-box-outline" color="#F50057" size={40} />
        </TouchableOpacity>

        {stations.map((station,index) => (
            <Card>
                <Card.Title>{stations[index].name}</Card.Title>
                <Card.Divider/>
                <Card.Image
                    source={{uri: stations[index].image}}
                />
                <Pressable style={Object.assign({}, styles.button, styles.center)}
                           onPress={() => navigation.navigate('Map', {latitude: station.coordinates.latitude, longitude: station.coordinates.longitude})}>
                    <Text style={styles.buttonTxt}>View Location</Text>
                </Pressable>
            </Card>
        ))}
    </ScrollView>
  );
}
