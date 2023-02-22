/* eslint-disable prettier/prettier */ /* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-alert */ /* eslint-disable quotes */
import React, {useState} from 'react';
import {Dimensions, SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,Pressable,Image,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { Card } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'ccb78a87';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export function Search({navigation, route}) {

    const [movieTitle, setMovieTitle] = useState('');
    const [movieData, setMovieData] = useState(null);

    const searchMovie = () => {
        axios.get(`${BASE_URL}&t=${movieTitle}`)
            .then(response => {
                // console.log(response.data);
                setMovieData(response.data);
                // alert(JSON.stringify(response.data))
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleSaveMovie = async () => {
        try {
            const existingMovies = await AsyncStorage.getItem('movies');
            const movies = existingMovies ? JSON.parse(existingMovies) : [];
            movies.push(movieData);

            //alert(JSON.stringify(movies))
            await AsyncStorage.setItem('movies', JSON.stringify(movies));
            alert('Movie saved successfully!');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <View>
                <TextInput
                    value={movieTitle}
                    onChangeText={setMovieTitle}
                    placeholder="Search a name of a movie"
                />
                <Pressable
                    style={{backgroundColor: '#F50057', padding: 10}}
                    onPress={searchMovie}>
                    <Text style={{textAlign:'center', color:"#fff"}}>Search</Text>
                </Pressable>
                {movieData && (
                    <Card>
                        <Image
                            source={{ uri: movieData.Poster }}
                            style={{ width: 200, height: 300, alignSelf: 'center', marginBottom:20 }}
                        />
                    <Card.Divider />
                        <Card.Title>{movieData.Title}</Card.Title>
                        <Text>Ano: {movieData.Year}</Text>
                        <Text>Gênero: {movieData.Genre}</Text>
                        <Text>Nota do IMDb: {movieData.imdbRating}</Text>
                        <Pressable  style={styles.buttonSave} onPress={handleSaveMovie}>
                            <Text style={{color:'#000'}}>Save to watch later</Text>
                        </Pressable>
                    </Card>
                )}
            </View>
        </>
    );
}


let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundImage: 'linear-gradient(black, #93e9ff)',
    },
    buttonSave:{
        backgroundColor:'#ff93b9',
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
        backgroundColor: '#ff93b9',
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