import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Scanner from './components/Scanner';
export default function App() {
  const [showScanner, setShowScanner] = useState(false);

  return (
    <View style={styles.container}>
      {showScanner ? <Scanner /> : ""}
      <Button title={'Tap to Scan Barcodes'} onPress={() => setShowScanner(true)} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  scanner: {
    width: '50%',
    height: '50%',
    alignSelf: 'center'
  }
})