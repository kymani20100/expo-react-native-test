import React,{useState} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [outputText, setOutputText] = useState('Change code in the editor and watch it change on your phone! Save to get a shareable url');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {outputText}
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Button title="Change" onPress={() => setOutputText('I was born by the river. In a little tent.')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
