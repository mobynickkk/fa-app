import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsScreen from './contacts/ContactsScreen';

export default function() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Contacts"
                component={ContactsScreen}
                options={{title: "Преподаватели"}}
            />
        </Stack.Navigator>
    );
    
}