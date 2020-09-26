import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, View, Text } from 'react-native';


export default function() {

    const teachers = [
        {
            name: "Каверина Валерия Константиновна",
            subject: "Дискретная математика",
            email: "vkkaverina@fa.ru"
        },
        {
            name: "Волкова Елена Сергеевна",
            subject: "Математический анализ. Лекции",
            email: "esvolkova@inbox.ru"
        },
        {
          name: "Петрова Мария Владимировеа",
          subject: "Математический анализ. Семинары",
          email: "mvpetrova@fa.ru"
        },
        {
          name: "Романова Екатерина Владимировна",
          subject: "Алгебра и Геометрия. Семинары",
          email: "ekatromanova@mail.ru"
        },
    ]

    const renderTeacher = ({ item }) => {
      return (
        <View style={styles.taskContainer}>
          <View style={{flex: 4}}>
            <Text style={styles.taskName}>{item.name}</Text>
            <Text>{item.subject}</Text>
            <Text>{item.email}</Text>
          </View>
        </View>
      )
    }
    return(
      <View style={styles.container}>
        <FlatList
          style={{width: "95%"}}
          data={teachers}
          renderItem={renderTeacher}
          keyExtractor={teacher => teacher.name}
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
      width: "100%",
      paddingHorizontal: "5%",
      paddingVertical: "2%",
      flexDirection: "row"
    },
    taskName: {
      fontSize: 17
    },
    dateContainer: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 15
    }
});