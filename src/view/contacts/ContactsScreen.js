import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet, View, Text } from 'react-native';
import { teacherRepository } from "../../di";
import Contact from "./Contact";


const ContactsScreen = () => {
    const teacherRepository = teacherRepository;

    const teachers = teacherRepository.getTeachersInfoByGroup('gg21-5');

    return(
      <View style={styles.container}>
        <FlatList
          style={{width: "95%"}}
          data={teachers}
          renderItem={Contact}
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
    dateContainer: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 15
    }
});

export default ContactsScreen;
