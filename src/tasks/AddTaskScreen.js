import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, Alert } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';


export default function({ navigation, tasks, setTasks, state }) {

    const [newTask, setNewTask] = useState({});
    const [show, setShow] = useState(false);

    const saveTask = async () => {
        let response = fetch('http://fa-app.herokuapp.com/api/v1/hometask/',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({...newTask, profile: state.hash})
        })

    }

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
                    onChangeText={text => setNewTask({...newTask, task: text})} 
                    multiline={true}
                />
                <TouchableOpacity
                    style={styles.dateInput}
                    onPress={() => setShow(true)}
                >
                    <Text>Сделать до: { newTask.date }</Text> 
                </TouchableOpacity>
                { show && <DateTimePicker
                    mode="date"
                    value={new Date()}
                    onChange={(e, rawDate) => {
                        let dateArray = rawDate.toLocaleDateString('en-US').split('/');
                        let date = '20' + dateArray[2] + '-' + dateArray[0] + '-' + dateArray[1];
                        setNewTask({...newTask, deadline: date});
                        setShow(false);
                    }
                }
                />}

                <Button 
                    style={styles.button} 
                    title="Добавить" 
                    onPress={() => {
                        saveTask();
                        setTasks([...tasks, {...newTask, id: tasks.length + 1}]);
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