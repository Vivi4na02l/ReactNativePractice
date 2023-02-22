/* eslint-disable prettier/prettier */ /* eslint-disable react-native/no-inline-styles */ /* eslint-disable no-alert */ /* eslint-disable quotes */
import React, {useState, useEffect} from 'react';
import {Dimensions, FlatList, SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,Pressable,Image,} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from '@rneui/themed';


export function WatchLater({navigation, route}) {
    let height = Dimensions.get('window').height;
    let width = Dimensions.get('window').width;

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getSavedMovies = async () => {
            const savedMovies = await AsyncStorage.getItem('movies');

            if (savedMovies) {
                setMovies(JSON.parse(savedMovies));
            }
        };
        getSavedMovies();
    }, []);


    const handleDeleteMovie = async (item) => {
        const updatedMovies = movies.filter((m) => m.Title !== item.Title);

        try {
            await AsyncStorage.setItem('movies', JSON.stringify(updatedMovies));
            setMovies(updatedMovies);
        } catch (error) {
            console.log(error);
        }
    }

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

    const renderMovie = ({ item }) => (
        <Card>
            <Image
                source={{ uri: item.Poster }}
                style={{ width: 200, height: 300, alignSelf: 'center', marginBottom:20 }}
            />
        <Card.Divider />
            <Card.Title>{item.Title}</Card.Title>
            <Text>Ano: {item.Year}</Text>
            <Text>Gênero: {item.Genre}</Text>
            <Text>Nota do IMDb: {item.imdbRating}</Text>

            <Pressable  style={styles.buttonSave} onPress={() => handleDeleteMovie(item)}>
                <Text style={styles.btnText}>Remove Movie</Text>
            </Pressable>

        </Card>
    );

    return (
        <>
            <View>
                {movies.length > 0 ? (
                    <FlatList
                        data={movies}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderMovie}
                    />
                ) : (
                    <Text>No saved movies found.</Text>
                )}
            </View>
        </>
    );
}
