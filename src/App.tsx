/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
// import {Alert, Button, StyleSheet, Text, View} from 'react-native';
// import {auth0} from './lib/auth0';

// export default class App extends React.Component {
//   loginWindow() {
//     Alert.alert('You tapped the button!');
//     auth0.webAuth
//       .authorize({
//         scope: 'openid email profile ',
//         useBrowser: true,
//         prompt: 'login',
//       })
//       .then(data => {
//         console.log(data);
//         // Alert.alert('You tapped the button!');
//         Alert.alert(data.toString());
//         // Successfully authenticated
//         // Store the accessToken
//       })
//       .catch(error => console.log(error));
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>auth0 login example!!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Button title="login" onPress={() => this.loginWindow()} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const App: Element = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView></SafeAreaView>
    </>
  );
};

export default App;
