import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RenderLesson from './RenderLesson';

export default function({ item }) {

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 
                        'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dateArray = item.key.split('/');
    const tempDate = dateArray[1] + '.' + dateArray[0] + '.' + dateArray[2]
    const rawDate = new Date(item.key);
    const dayOfWeek = daysOfWeek[rawDate.getDay()];

    // Захотелось побольше констант в жизни, что поделать...

    return (
        <View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>{dayOfWeek}</Text>
                <Text style={styles.date}>{tempDate}</Text>
            </View>
            <View>
                {item.list.map(lesson => {
                    return (
                        <RenderLesson key={tempDate+lesson.time+lesson.teacher} lesson={lesson} />
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 17,
        backgroundColor: "#fff",
        color: "#005c67",
        fontWeight: "700"
    },
    dateContainer: {
        backgroundColor: "#fff", 
        paddingLeft: 20,
        justifyContent: "space-around",
        paddingTop: 15
    }
})