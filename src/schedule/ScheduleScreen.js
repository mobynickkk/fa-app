import React from 'react';
import { View, FlatList } from 'react-native';
import RenderDay from './RenderDay';

export default function() {

    const schedule = [
        {
            key: "14/09/20",
            list: [
                {
                    subject: "История",
                    time: "10:10-11:40",
                    teacher: "Рябчикова ЕИ"
                },
                {
                    subject: "Матанализ",
                    time: "11:50-13:20",
                    teacher: "Волкова ЕС"
                }
            ]
        },
        {
            key: "15/09/20",
            list: [
                {
                    subject: "История",
                    time: "10:10-11:40",
                    teacher: "Рябчикова ЕИ"
                },
                {
                    subject: "Матанализ",
                    time: "11:50-13:20",
                    teacher: "Волкова ЕС"
                }
            ]
        },
        {
            key: "16/09/20",
            list: [
                {
                    subject: "История",
                    time: "10:10-11:40",
                    teacher: "Рябчикова ЕИ"
                },
                {
                    subject: "Матанализ",
                    time: "11:50-13:20",
                    teacher: "Волкова ЕС"
                }
            ]
        },
        {
            key: "17/09/20",
            list: [
                {
                    subject: "История",
                    time: "10:10-11:40",
                    teacher: "Рябчикова ЕИ"
                },
                {
                    subject: "Матанализ",
                    time: "11:50-13:20",
                    teacher: "Волкова ЕС"
                }
            ]
        },
        {
            key: "18/09/20",
            list: [
                {
                    subject: "История",
                    time: "10:10-11:40",
                    teacher: "Рябчикова ЕИ"
                },
                {
                    subject: "Матанализ",
                    time: "11:50-13:20",
                    teacher: "Волкова ЕС"
                }
            ]
        },
    ]
    
    return (
        <View>
            <FlatList 
                data={schedule}
                keyExtractor={item => item.key}
                renderItem={RenderDay}
            />
        </View>
    );

}