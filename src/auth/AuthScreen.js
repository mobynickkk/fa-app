import React from 'react';
import { StyleSheet, View, Text, Alert, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import logo from '../../assets/logo.png';
import * as Crypto from 'expo-crypto';

export default function({ navigation, setUser }) {

    const [fields, setFields] = React.useState({name: '', group: ''})

    const verifyUser = async () => {
        if (fields.name && fields.group) {
            const string = fields.name+fields.group;
            const hash = await Crypto.digestStringAsync(
                Crypto.CryptoDigestAlgorithm.SHA256,
                string,
                { encoding: Crypto.CryptoEncoding.HEX }
            );
            let response = await fetch('http://fa-app.herokuapp.com/api/v1/profile?hash=' + hash);
                
            let userInfo = await response.json();

            if (response.ok){
                setUser({...userInfo, hash});
            }
            else
            {
                Alert.alert("Ошибка входа", "Пользователь не найден")
            }

                
        } else {
            Alert.alert("Ошибка входа", "Вы ввели неправильные данные")
        }
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <TextInput 
                style={styles.textInput}
                placeholder="Введите свое ФИО"
                autoCapitalize="words"
                onChangeText={text => setFields({...fields, name: text.trim()})}
            />
            <TextInput 
                style={styles.textInput} 
                placeholder="Введите свою группу"
                autoCapitalize="characters"
                onChangeText={text => setFields({...fields, group: text.trim()})}    
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => verifyUser()}
            >
                <Text style={{color: "#005c67"}}>Войти</Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#005c67",
        paddingHorizontal: 10
    },
    logo: {
        marginBottom: "20%"
    },
    textInput: {
        backgroundColor: "#005c67",
        color: "white",
        marginHorizontal: 15,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        width: "80%",
        marginVertical: 5
    },
    button: {
        backgroundColor: "white",
        color: "#212121",
        marginTop: 15,
        height: 35,
        width: 150,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    }
})