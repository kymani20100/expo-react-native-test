import React from 'react';
import {View, StyleSheet} from 'react-native';
// import Constants from 'expo-constants';

import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Braniac" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
