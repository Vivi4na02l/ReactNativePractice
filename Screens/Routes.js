/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StatusBar,Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';

export function Routes({navigation, route}) {
    const [RouteData, setRouteData] = useState([]);

    useEffect(() => {
        let interval = setInterval(() => getRouteData(), 3000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const getRouteData = async () => {
        // console.log('get route data called');
        await fetch(
            'https://my-json-server.typicode.com/joaorafaelsantos/gogo/routes',
        )
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setRouteData(data);
        })
        .catch(function (error) {
            console.log(
                'There has been a problem with your fetch operation: ' +
                error.message,
            );

            // ADD THIS THROW error
            throw error;
        });
    };

    const Item = ({name, origin, destination, type, status, delay, id, next_departure_time}) => (
        <View style={id === 1 ? styles.listItem : styles.listItemSecondary}>
            <Text style={styles.listTextHeader}>{name}</Text>
            <Text style={styles.listText}>{origin} to {destination} ({type})</Text>
            <Text style={styles.listText}>Next departure time: {next_departure_time}</Text>

            {status === 'on time' ? (
            <Text style={styles.listText}>{status}</Text>
                ) : (
            <Text style={styles.listText}>{status} by {delay} minutes</Text>
            )}
        </View>
    );

    const renderItem = ({item}) => (
        <Item
            name={item.name}
            origin={item.origin}
            destination={item.destination}
            type={item.type}
            status={item.status}
            next_departure_time={item.next_departure_time}
            delay={item.delay}
            id={item.id}
        />
    );

    return (
        <>
            {/* <StatusBar hidden={true} /> */}
            <StatusBar backgroundColor="#F50057" />
            <View>
                <Text style={styles.Header}>Next departures</Text>
                <FlatList
                    data={RouteData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
}


let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;
const styles = StyleSheet.create({
    Header: {
        color: '#F50057',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 16,
        marginTop: 30,
      },
      listItem: {
        backgroundColor: '#F50057',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4,
      },
      listItemSecondary: {
        backgroundColor: '#AB9B96',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4,
      },
      listText: {
        color: '#F0E7D8',
      },
      listTextHeader: {
        color: '#F0E7D8',
        fontSize: 16,
        fontWeight: 'bold',
      },

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
            resizeMode:'contain',
            alignSelf: 'center',
        },
})