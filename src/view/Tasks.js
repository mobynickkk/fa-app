import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddTaskScreen from './tasks/AddTaskScreen';
import TasksScreen from './tasks/TasksScreen';

const Stack = createStackNavigator();

export default function({state}) {

    const [tasks, setTasks] = React.useState([]);

    const getTasks = async () => {
        let response = await fetch('http://fa-app.herokuapp.com/api/v1/homework?hash=' +
        state.hash);
        if (response.ok) {
            setTasks(await response.json())
        } else {
          Alert.alert("Ошибка запроса", "Не удалось найти домашние задания")
        }
    }

    React.useEffect(() => {
        getTasks();
    }, [])

    const HomeTasks = ({ navigation }) => <TasksScreen navigation={navigation} tasks={tasks} />
    const AddScreen = ({ navigation }) => <AddTaskScreen state={state} navigation={navigation} tasks={tasks} setTasks={setTasks} />

    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTasks}
            options={{title: "Домашние задания"}}
          />
          <Stack.Screen 
            name="AddTaskScreen"
            component={AddScreen}
            options={{title: "Добавить задание"}}
          />
        </Stack.Navigator>
    )

}