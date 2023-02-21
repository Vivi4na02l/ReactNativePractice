/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Icon from 'react-native-vector-icons/FontAwesome5';

// import Icon from '@mdi/react';
// import { mdiChatOutline } from '@mdi/js';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const MyIcon = <Icon name="rocket" size={30} color="#900" />;

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

{/* <Icon path={mdiAlarm} size={1} />
function Icons({name, size, color}) {
  return <Icon name={name} size={size} color={color}/>
} */}

import { Text, Dimensions, StyleSheet } from 'react-native';
import {Register} from './Screens/Register';
import {Login} from './Screens/Login';
import {Home} from './Screens/Homepage';
import {Map} from './Screens/Map';
import {Routes} from './Screens/Routes';

const height = Dimensions.get('window').height;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  notSelected: {
    color: '#ff93b9', //#9099
  },
  selected: {
    color: '#F50057',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Main"
          component={Main}
        />
        <Stack.Screen name="Map" component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
      tabBarHideOnKeyboard: true,
      tabBarStyle: { height: height * 0.075, padding: 10, backgroundColor: 'white'},
      marginTop: 100,
      headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({focused, color, size}) => {
            if (focused) {
              return <Text style={styles.selected}>Cities</Text>
            } else {
              return <Text style={styles.notSelected}>Cities</Text>
            }
          },

          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <MaterialCommunityIcons name="city-variant" color="#F50057" size={30} />;
            } else {
              return <MaterialCommunityIcons name="city-variant-outline" color="#ff93b9" size={30} />;
            }
          }
        }}
      />

      <Tab.Screen
        name="Routes"
        component={Routes}
        options={{
          tabBarLabel: ({focused, color, size}) => {
            if (focused) {
              return <Text style={styles.selected}>Routes</Text>
            } else {
              return <Text style={styles.notSelected}>Routes</Text>
            }
          },

          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <MaterialCommunityIcons name="map-marker" color="#F50057" size={30} />;
            } else {
              return <MaterialCommunityIcons name="map-marker-outline" color="#ff93b9" size={30} />;
            }
          }
        }}
      />

      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarLabel: ({focused, color, size}) => {
            if (focused) {
              return <Text style={styles.selected}>Map</Text>;
            } else {
              return <Text style={styles.notSelected}>Map</Text>;
            }
          },

          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <MaterialCommunityIcons name="map" color="#F50057" size={30} />;
            } else {
              return <MaterialCommunityIcons name="map-outline" color="#ff93b9" size={30} />;
            }
          }
        }}
      />

    </Tab.Navigator>
  );
}
