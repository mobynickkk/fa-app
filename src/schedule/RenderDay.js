import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RenderLesson from './RenderLesson';

export default function({ item }) {

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 
                        'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dateArray = item.key.split('/');
    const tempDate = dateArray[1] + '/' + dateArray[0] + '/' + dateArray[2]
    const rawDate = new Date(tempDate);
    const dayOfWeek = daysOfWeek[rawDate.getDay()];

    // Захотелось побольше констант в жизни, что поделать...

    return (
        <View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{dayOfWeek}</Text>
                <Text style={styles.date}>{item.key}</Text>
            </View>
            <View>
                {item.list.map(lesson => {
                    return (
                        <RenderLesson lesson={lesson} />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 20,
        backgroundColor: "#005c67",
        color: "#fff"
    },
    dateContainer: {
        backgroundColor: "#005c67", 
        paddingHorizontal: 10, 
        flexDirection: "row",
        justifyContent: "space-between"
    }
})