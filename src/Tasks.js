import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddTaskScreen from './tasks/AddTaskScreen';
import TasksScreen from './tasks/TasksScreen';

const Stack = createStackNavigator();

export default function() {
    
    const [tasks, setTasks] = React.useState([]);

    const HomeTasks = ({ navigation }) => <TasksScreen navigation={navigation} tasks={tasks} />
    const AddScreen = ({ navigation }) => <AddTaskScreen navigation={navigation} tasks={tasks} setTasks={setTasks} />

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