import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function({ navigation, tasks, setTasks }) {

    const [newTask, setNewTask] = useState({});
    const [show, setShow] = useState(false);

    return (
            <View style={styles.container}>
                <Text>Предмет:</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => setNewTask({...newTask, subject: text})} 
                />
                <Text style={{ marginTop: 10 }}>Задание:</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={text => setNewTask({...newTask, name: text})} 
                />
                <TouchableOpacity
                    style={styles.dateInput}
                    onPress={() => setShow(true)}
                >
                    <Text>Сделать до: { newTask.date && newTask.date.toLocaleString() }</Text> 
                </TouchableOpacity>
                { show && <DateTimePicker
                    mode="date"
                    value={new Date()}
                    onChange={(e, date) => {
                        setNewTask({...newTask, date: date.toLocaleDateString('ru-ru')});
                        setShow(false);
                    }
                }
                />}

                <Button 
                    style={styles.button} 
                    title="Добавить" 
                    onPress={() => {
                        setTasks([...tasks, {...newTask, key: Date.now().toString()}])
                        navigation.navigate('Home')
                    }}
                />
            </View>
    )
}


const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 10,
            paddingVertical: 20,
            flexDirection: "column",
            justifyContent: "center"
        },
        textInput: {
            marginHorizontal: 15,
            borderBottomColor: "#212121",
            borderBottomWidth: 1
        },
        button: {
            backgroundColor: "#005c67",
            color: "white"
        },
        dateInput: {
            marginVertical: 10,
            height: 30,
            fontSize: 30
        }
});