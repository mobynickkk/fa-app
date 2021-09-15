import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Contact = ({ item }) => {
    return (
        <View style={styles.taskContainer}>
            <View style={{flex: 4}}>
                <Text style={styles.taskName}>{item.name}</Text>
                <Text>{item.subject}</Text>
                <Text>{item.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "2%",
        flexDirection: "row"
    },
    taskName: {
        fontSize: 17
    },
});

export default Contact;