/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useContext, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {UserContext} from './UserContext'


const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
}

function UserProvider({children}) {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={(userData, setUserData)}>
      {children}
      </UserContext.Provider>
  );
}

function HomeScreen({navigation}) {
    const {userData} = useContext(UserContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Press the button bitch</Text>
      <Button
        title="Go to Details Page"
        onPress={() => navigation.navigate('Details')}
      />
      <GoogleSignInComp />
    </View>
  );
}

function DetailsScreen() {
  const {userData} = useContext(UserContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>The motha fucking Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

GoogleSignin.configure({
  androidClientId:
    '815978044538-h9opub9kaofs6jj24ogt277kunl803oo.apps.googleusercontent.com',
});
const GoogleSignInComp = () => {
  const {userData, setUserData} = useContext(UserContext);
  return (
    <View>
      <Text></Text>
      <Button
        title={'Sign in with Google'}
        onPress={() => {
          async function signIn() {
            try {
              await GoogleSignin.hasPlayServices();
              const user = await GoogleSignin.signIn();
              //If login is successful you'll get user info object in userInfo below I'm just printing it to console. You can store this object in a usestate or use it as you like user is logged in.
              console.log(user);
              setUserData(user);
            } catch (error) {
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                alert('You cancelled the sign in.');
              } else if (error.code === statusCodes.IN_PROGRESS) {
                alert('Google sign In operation is in process');
              } else if (
                error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE
              ) {
                alert('Play Services not available');
              } else {
                alert(
                  'Something unknown went wrong with Google sign in. ' +
                    error.message,
                );
              }
            }
          }
          signIn();
        }}
      />
    </View>
  );
};

export default App;
