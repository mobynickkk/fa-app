import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function({ lesson }) {
    return (
        <View style={styles.container} key={lesson.time} >
            <Text style={styles.time}>{lesson.time}</Text>
            <View style={{flex: 3}}>
                <Text style={styles.subject}>{lesson.subject}</Text>
                <Text>{lesson.teacher}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15,
        alignItems: "center"
    },
    time: {
        color: "#005c67",
        flex: 1
    },
    subject: {
        fontSize: 24
    }
})