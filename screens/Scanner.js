import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';



const Scanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [itemBarcode, setItemBarcode] = useState(null);
    const [productName, setProductName] = useState(null);
  
    useEffect(() => {
      const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      };
  
      getBarCodeScannerPermissions();
    }, []);

    const Modal = () => {
      let name = "";
      return (
          <View style={styles.modal}>
              <TextInput style={styles.modalInputs} editable={false}>Barcode: {itemBarcode}</TextInput>
              <TextInput 
                onChangeText={(val) => name = val}
                onEndEditing={() => setProductName(name)} 
                style={styles.modalInputs} placeholder="Name">{productName}</TextInput>
              <Button title='Save' onPress={() => createNewProduct()}></Button>
          </View>
      )
  }

    const createNewProduct = async () => {
      console.log(productName);
      console.log(itemBarcode);
      if (productName && itemBarcode) {
        try {
          let response = await fetch("http://192.168.0.11:5036/products", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Barcode: itemBarcode,
              Name: productName
            })
          });
          let responseJson = await response.json();
          return responseJson;
  
        } catch (error) {
          console.error(error);
        }
      }
    }
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      setItemBarcode(data);
      setShowModal(true);
      //createNewProduct(data);

      //navigation.navigate('Home');


    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        {showModal ? <Modal /> : ""}
        <View style={styles.scannerBox}></View>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scanner}
        />
        

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
  scannerBox: {
    position: 'absolute',
    height: '30%',
    width: '65%',
    borderWidth: 5,
    borderColor: 'white',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    zIndex: 1
  },
  scanner: {
    width: '100%',
    height: '100%',
    margin: 'auto',
    alignSelf: 'center',
    zIndex: 0
  },
  text: {
    alignSelf: 'center',
    fontSize: '50px',
    position: 'absolute',
    color: 'white'
  },
  modal: {
    position: 'absolute',
    backgroundColor: 'green',
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    zIndex: '2'
  },
  modalInputs: {
    backgroundColor: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})
