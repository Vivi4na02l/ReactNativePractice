/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import { Dimensions,SafeAreaView,StyleSheet,} from 'react-native';
import MapView from 'react-native-maps';
// import stations from './famel.json';
// import famel from './data/famel.json';

export function Map({navigation, route}) {
  // alert('oi'+JSON.stringify(route))

  const [coords, setCoords] = useState({
    latitude: 41.354639,
    longitude: -8.756689,
  });

  useEffect(() => {
    if (route.params !== undefined) {
      setCoords({
        latitude: route.params.latitude,
        longitude: route.params.longitude,
      });
    }
  }, [route.params]);

  let height = Dimensions.get('window').height;
  let width = Dimensions.get('window').width;
  // const station = route.params.index

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: width,
      height: height,
      backgroundColor: '#93e9ff',
      // backgroundImage: 'linear-gradient(black, #93e9ff)',
    },
    div: {
        backgroundColor: '#f2f2f2',
        padding: 27,
        borderRadius: 30,
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
  });

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      region={{
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >

      {/* <Marker
        coordinate={{
          latitude: pos.latitude,
          longitude: pos.longitude, 
        }}
        title="You are here!"
        description="Your current location."
        pinColor={"#fdfdfd"}
      />

      <Marker
        coordinate={{
          latitude: 41.145907,
          longitude: -8.613536 
        }}
        title="Torre dos Clérigos"
        description="Tower, Museum and Church"
        pinColor={"#5508D2"}
      />

      <Marker
        coordinate={{
          latitude: 41.140080,
          longitude: -8.609460
        }}
        title="Ponte Luis I"
        description="One of the most famous touristic spots of Porto"
        pinColor={"#07CDF9"}
      />

      <Marker
        coordinate={{
          latitude: 41.146790,
          longitude: -8.614900
        }}
        title="Livraria Lello"
        description="Most famous library of Porto"
        pinColor={"#07CDF9"}
      /> */}
    </MapView>
  );
}