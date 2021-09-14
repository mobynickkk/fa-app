import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './schedule/ScheduleScreen';

export default function() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Schedule"
                component={ScheduleScreen}
                options={{title: "Расписание"}}
            />
        </Stack.Navigator>
    );
    
}