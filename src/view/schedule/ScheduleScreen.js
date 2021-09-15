import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import RenderDay from './RenderDay';

export default function() {

    const [schedule, setSchedule] = React.useState([])

    React.useEffect(() => {
        async function fetchData(){
        let response = await fetch('http://fa-app.herokuapp.com/api/v1/schedule/');
        if (response.ok) {
            setSchedule(await response.json());
        } else {
            Alert.alert("Ошибка загрузки данных", "Проверьте подключение к сети")
        }}
        fetchData();
    }, [])
    
    return (
        <View style={{ paddingTop: 2 }}>
            <FlatList 
                data={schedule}
                keyExtractor={item => item.key}
                renderItem={RenderDay}
                extraData={schedule}
            />
        </View>
    );

}