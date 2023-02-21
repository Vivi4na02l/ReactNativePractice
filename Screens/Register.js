/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable quotes */
import React, {useState, useEffect} from 'react';
import {Dimensions,SafeAreaView,ScrollView,TextInput,StyleSheet,Text,TouchableOpacity,View,Button,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Register({navigation}) {
  let [enter, setEnter] = useState(false);
  const [username, setUsername] = useState('vivi4na27l');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('password');
  const [users, setUsers] = useState([]);

  let height = Dimensions.get('window').height;
  let width = Dimensions.get('window').width;

  // setEnter(!enter);
  // useEffect(() => {
  //   alert('entrei');
  //   const getSavedUsers = async () => {
  //     const savedUsers = await AsyncStorage.getItem('users');

  //     if (savedUsers) {
  //       alert(JSON.stringify(savedUsers));
  //       setUsers(JSON.parse(savedUsers));
  //     }
  //   };

  //   getSavedUsers();
  // }, [enter]);

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
      backgroundColor: '#f1f1f1',
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

    if (password === confirmPassword && !oldUsers.find(user => user.username == username)) {
      // setUsers([...users, {username: username, password: password}]);
      oldUsers.push({username: username, password: password});
      setUsers(oldUsers);

      alert(`User ${username} created with success!`);

      await AsyncStorage.setItem('users', JSON.stringify(users));
      navigation.navigate('Login'); //, {username: username, password: password}
    } else if (oldUsers.find(user => user.username == username)) {
      alert(`User ${username} already exists!`);
    } else {
      alert(`None of the passwords match`);
    }
  };

  let goToLogin = event => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.div}>
          <View>
            <Text style={styles.txt}>Choose your display name:</Text>
            <TextInput
              style={styles.txt}
              value={username}
              onChangeText={text => setUsername(text)}
            />
          </View>

          <View>
            <Text style={styles.txt}>Choose your password:</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.txt}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>

          <View>
            <Text style={styles.txt}>Choose your display name:</Text>
            <TextInput
              secureTextEntry={true}
              style={styles.txt}
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
            />
          </View>

          <View>
            <TouchableOpacity onPress={onPressButton}
                              style={{backgroundColor: '#F50057',
                                      padding:10,
                                      borderRadius:10 }}>
              <Text style={{textAlign: 'center', color: 'white'}}>SUBMIT</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToLogin}
                              style={{backgroundColor: 'transparent'}}>
              <Text style={{textAlign: 'center'}}>I already have an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
