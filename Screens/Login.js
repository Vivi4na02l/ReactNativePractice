/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable quotes */
import React, {useState} from 'react';
import {Dimensions,SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login({navigation}) {
  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [users, setUsers] = useState([]);

  let height = Dimensions.get('window').height;
  let width = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: width,
      height: height,
      backgroundColor: '#ff93b9',
      // backgroundImage: 'linear-gradient(black, #93e9ff)',
    },
    div: {
        backgroundColor: '#f2f2f2',
        padding: 27,
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
  });

  let onPressButton = async(event) => {
    event.preventDefault();

    const existingUsers = await AsyncStorage.getItem('users');
    const oldUsers = existingUsers ? JSON.parse(existingUsers) : [];
    setUsers(oldUsers);

    //route.params.username
    if (users.find(user => user.username == usernameLogin && user.password == passwordLogin)) {
      alert(`Welcome ${usernameLogin}!`);
      navigation.navigate('Main');
    } else {
      alert(`Username or password incorrects!`)
    }
  };

  let goToRegister = event => {
    navigation.navigate('Register');
  };

  return (
    <ScrollView>
        <View style={styles.body}>
            <View style={styles.div}>
                <View>
                    <Text style={styles.txt}>Enter your username:</Text>
                    <TextInput
                      placeholder="vivi4na27l"
                      style={styles.txt}
                      value={usernameLogin}
                      onChangeText={text => setUsernameLogin(text)}
                    />
                </View>

                <View>
                    <Text style={styles.txt}>Enter your password:</Text>
                    <TextInput
                      placeholder="password"
                      secureTextEntry={true}
                      style={styles.txt}
                      value={passwordLogin}
                      onChangeText={text => setPasswordLogin(text)}
                    />
                </View>

                <View>
                    <TouchableOpacity onPress={onPressButton}
                                      style={{backgroundColor: '#F50057',
                                              padding:10,
                                              borderRadius:10 }}>
                      <Text style={{textAlign: 'center', color: 'white'}}>SUBMIT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={goToRegister}
                                      style={{backgroundColor: 'transparent'}}>
                      <Text style={{textAlign: 'center'}}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </ScrollView>
  );
}
