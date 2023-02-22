/* eslint-disable prettier/prettier */ /* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-alert */ /* eslint-disable quotes */
import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,Pressable,Image,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '@rneui/themed';

const API_KEY = 'ccb78a87';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export function TVflix({navigation, route}) {
    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;

    const [isTrue, setIsTrue] = useState(false)
    const [movieTitle, setMovieTitle] = useState(['It','A quiet place','Bird box','Avengers: Endgame','Final destination','Up','Frozen']);
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const moviePromises = movieTitle.map(movie => axios.get(`${BASE_URL}&t=${movie}`));
        Promise.all(moviePromises)
            .then(responses => {
                const movieArray = responses.map(response => ({
                    Title: response.data.Title,
                    Poster: response.data.Poster,
                    Genre: response.data.Genre,
                }));
                setMovieData(movieArray);
                setIsTrue(true);
            })
            .catch(error => {
                console.error(error);
                setIsTrue(false);
            });

        // alert('wait a damn minute'+JSON.stringify(movieData));
    }, []);

    function handleSaveMovie() {

    }

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      // backgroundImage: 'linear-gradient(black, #93e9ff)',
    },
    buttonSave:{
        backgroundColor:'#9b4dca',
            paddingHorizontal:32,
            paddingVertical:8,
            borderRadius:4,
            marginBottom:20,
            marginTop:20,
            alignItems: 'center',
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

  if (isTrue == true) {
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

            <View style={{flexDirection:'column'}}>
                {movieData.map((movie,index) => (
                    <Card>
                        <Image
                            source={{ uri: movie.Poster }}
                            style={{ width: 200, height: 300, alignSelf: 'center', marginBottom:20 }}
                        />
                    <Card.Divider />
                        <Card.Title>{movie.Title}</Card.Title>
                        <Text>Gênero: {movie.Genre}</Text>
                        <Pressable  style={styles.buttonSave} onPress={handleSaveMovie}>
                            <Text style={{color:"#fff"}}>Save to watch later</Text>
                        </Pressable>
                    </Card>
                ))}
            </View>
        </ScrollView>
    );
  } else {
        return (
            <>
                <TouchableOpacity style={{//backgroundColor: 'white',
                                        margin: 0,
                                        position: 'absolute',
                                        right: 0,
                                        top: 0,
                                        zIndex:10}}
                                onPress={change}>
                    <MaterialCommunityIcons name="account-box-outline" color="#F50057" size={40} />
                </TouchableOpacity>

                <Text>Add something bruh!</Text>
            </>
        );
    }
}
