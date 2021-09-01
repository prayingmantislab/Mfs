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

import * as React from 'react';
import {View, Text, Button, ImageBackground, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const image = {
  uri: 'https://res.cloudinary.com/dg6wajgky/image/upload/v1630484733/cute-romantic-panda-couple-suitable-illustration-valentine-wedding-card-cute-romantic-couple-panda-vector-135824516_dtvgee.jpg'
}
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.innerText}>Start now. Change forever</Text>
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('Details')}
      />
      </ImageBackground>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>The motha fucking Details Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header : {
    color: '#ffffff',
    fontWeight:'bold',
    fontSize: 32,
  },
  innerText : {
    color: '#ffffff',
    fontWeight:'bold',
    fontSize: 16,
  },
  image: {
    alignSelf: "stretch",
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
})
export default App;
