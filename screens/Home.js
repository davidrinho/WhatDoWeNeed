import { Text, View, StyleSheet, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';





const Home = ({route, navigation}) => {
    const [itemInfo, setItemInfo] = useState(null);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            if (route.params !== undefined){
                console.log("NOT UNBDEFINED")
                setItemInfo(prevSate => ({
                    type: route.params.type,
                    data: route.params.data
                }))
            } else {
                console.log("ITS UNDEFINED YO")
            }
        }
    }, [isFocused])

    return (
        <View>
            {itemInfo ?
            <View>
                <Text>{itemInfo.type}</Text>
                <Text>{itemInfo.data}</Text>
            </View>
            : ""}
            <Text>Home!</Text>
            <Button title={"SCAN SOMETHING"} onPress={() => navigation.navigate('Scanner')} />
        </View>
    )
}


export default Home;