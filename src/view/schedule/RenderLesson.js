import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function({ lesson }) {
    return (
        <View style={styles.container} >
            <Text style={styles.time}>{lesson.time}</Text>
            <View style={{flex: 3}}>
                <Text style={{fontSize: 17}}>{lesson.subject}</Text>
                <Text style={{fontSize: 14.5}}>{lesson.type}</Text>
                <Text>{lesson.teacher}</Text>
                <Text>{lesson.place}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        paddingVertical: 5
    },
    time: {
        color: "#005c67",
        flex: 1,
        marginTop: 10
    }
})