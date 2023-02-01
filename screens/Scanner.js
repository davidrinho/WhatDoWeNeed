import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';



const Scanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <Button title={'CLOSE'} style={styles.buttons} />
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
        <Text style={styles.text}>Scan something</Text>
      </View>
    );
}


export default Scanner;


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fdfdfd',
    justifyContent: 'center'
  },
  scanner: {
    width: '100%',
    height: '50%',
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    fontSize: '50px',
    position: 'absolute',
    color: 'white'
  },
  buttons: {
    fontSize: '50px',
    position: 'absolute',
    alignSelf: 'center',
    color: 'white'
  }
})