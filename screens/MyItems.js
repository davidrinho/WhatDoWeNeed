import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import {colors} from '../constants/theme';
import { FlatList } from 'react-native-web';
import Loading from '../components/Loading';



const MyItems = () => {
    const [items, setItems] = useState(null);

    const getItems = async () => {
        try {
            let response = await fetch("http://192.168.0.11:5056/products", {
              method: 'GET',
            });
            let responseJson = await response.json();
            setItems(responseJson);
    
          } catch (error) {
            console.error(error);
          }
    }

    useEffect(() => {
        getItems();
    }, [])

    return (
        <View style={styles.body}>
        {items ?         
        <View>    
        <View style={styles.hero}>
            <Text style={styles.heroText}>My Items</Text>
        </View>
            <FlatList>

            </FlatList>
        </View> : <Loading />}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.darkGreen,
        height: "100%"
    },
    hero: {
        backgroundColor: colors.green,
        height: "15%",
        justifyContent: 'center'
    },
    heroText: {
        fontSize: 24,
        padding: '2rem',
        color: colors.tan
    }
})

export default MyItems;