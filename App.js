import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';
import Constants from 'expo-constants';

// // You can import from local files
// import AssetExample from './components/AssetExample';

// // or any pure javascript modules available in npm
// import { Card } from 'react-native-paper';

export default function App() {

  return (
    <View>
      <View style={{padding: 40}}>
        <TextInput placeholder="XoXo" 
        style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
        <Button title="ADD " />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
