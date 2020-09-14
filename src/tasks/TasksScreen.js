import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, View, Text } from 'react-native';
import AddTask from './AddTask'


export default function({ navigation, tasks }) {

    const renderTask = ({ item }) => {
      return (
        <View style={styles.taskContainer}>
          <View style={{flex: 4}}>
            <Text style={styles.taskName}>{item.subject}</Text>
            <Text>{item.name}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={{color: "#006d7a"}}>{item.date}</Text>
          </View>
        </View>
      )
    }
    return(
      <View style={styles.container}>
        <AddTask navigation={navigation} />
        <FlatList
          style={{width: "95%"}}
          data={tasks}
          renderItem={renderTask}
          keyExtractor={task => task.key}
          extraData={tasks}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    taskContainer: {
      borderBottomColor: "#212121",
      borderBottomWidth: 1,
      width: "100%",
      paddingHorizontal: "5%",
      paddingVertical: "2%",
      flexDirection: "row"
    },
    taskName: {
      fontSize: 30
    },
    dateContainer: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 15
    }
  });