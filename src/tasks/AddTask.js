import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Dimensions } from 'react-native';
import plus from '../../assets/plus.png';

export default function({ navigation }) {
    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddTaskScreen")}>
                <Image source={plus} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        top: Dimensions.get('window').height*0.63,
        left: Dimensions.get('window').width*0.25,
        height: 75,
        width: 75,
        borderRadius: 100,
        backgroundColor: "#006d7a",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1
    },
    text: {
        color: "white"
    }
})