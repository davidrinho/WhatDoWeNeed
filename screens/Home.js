import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';





const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home!</Text>
            <Button title={"SCAN SOMETHING"} onPress={() => navigation.navigate('Scanner')} />
        </View>
    )
}


export default Home;