/* eslint-disable prettier/prettier */ /* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-alert */ /* eslint-disable quotes */
import React, {useState} from 'react';
import {Dimensions, SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,Pressable,Image,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function Change({navigation, route}) {
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

  function change(page) {
    if (page == 'Moove') {
        navigation.navigate('Home');
    } else {
        navigation.navigate('TV');
    }
  }

  return (
    <>
        <TouchableOpacity activeOpacity={1}
                          style={{backgroundColor: 'white',
                                  margin: 0,
                                  position: 'absolute',
                                  right: 0,
                                  top: 0,
                                  zIndex:10}}>
            <MaterialCommunityIcons name="account-box" color="#F50057" size={40} />
        </TouchableOpacity>

        <View style={{height: height,
                       flexDirection: 'column',
                       justifyContent: 'center',
                       alignItems: 'center',
                       }}>

            <View style={{width: '80%',
                           flexDirection: 'row',
                           justifyContent: 'center',
                           alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.4}
                                  style={{backgroundColor: 'white',
                                        borderRadius: 25,
                                        width: '100%',
                                        padding: height*0.1,
                                        margin: height*0.05,
                                        alignItems: 'center'}}
                                  onPress={()=>change('Moove')}>
                    <MaterialCommunityIcons name="movie-open-outline" color="#F50057" size={40} />

                    <Text>
                        Moove maps
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{width: '80%',
                           flexDirection: 'row',
                           justifyContent: 'center',}}>
                <TouchableOpacity activeOpacity={0.4}
                                  style={{backgroundColor: 'white',
                                        borderRadius: 25,
                                        width: '100%',
                                        padding: height*0.1,
                                        margin: height*0.05,
                                        alignItems: 'center'}}
                                  onPress={()=>change('TVflix')}>
                    <MaterialCommunityIcons name="earth" color="#F50057" size={40} />

                    <Text>
                        TVflix
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </>
  );
}
