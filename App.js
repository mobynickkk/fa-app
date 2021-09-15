import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthScreen from './src/view/auth/AuthScreen';
import Tasks from './src/view/Tasks';
import Schedule from './src/view/Schedule';
import Contacts from './src/view/Contacts';

const Tab = createBottomTabNavigator();

export default function App() {

  const [user, setUser] = React.useState({});

  const Auth = ({ navigation }) => <AuthScreen navigation={navigation} setUser={setUser} />
  const TaskSet = ({state}) => <Tasks state={user} />

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#005c67"
        }}
      >
        {Object.keys(user).length !== 0 ? (
          <>
          <Tab.Screen 
              name="Schedule"
              component={Schedule}
              options={{
                tabBarLabel: "Расписание",
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="table" color={color} size={size} />
              }}
            />
            <Tab.Screen 
              name="Tasks" 
              component={TaskSet} 
              options={{
                tabBarLabel: "Домашние задания",
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="book" color={color} size={size} />
              }}
            />
            <Tab.Screen 
              name="Contacts" 
              component={Contacts} 
              options={{
                tabBarLabel: "Преподаватели",
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="contacts" color={color} size={size} />
              }}
            />
          </>
        ) : (
          <Tab.Screen 
            name="Auth"
            component={Auth}
            options={{title: "Введите вашу группу и ФИО", tabBarVisible: false}}
          />
        )}
        
      </Tab.Navigator>  
    </NavigationContainer>
  );
}

