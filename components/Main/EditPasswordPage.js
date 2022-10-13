import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function EditPasswordPageScreenComponent({ navigation }) {
    const [password, setPassword] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [appState, setAppState] = useState({ loading: true, repos: null })

    async function editPassword() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        await fetch(`https://api.richhens.com/api/v1/user/password`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
                'Authorization': AuthStr,
            },
            body: JSON.stringify({ password: password, current_password: currentPassword })
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.blockHeader}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('UserProfileEditingScreen')}
                    >
                        <Image
                            style={{ width: 37, height: 37 }}
                            source={require('../../assets/images/backArrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>CHANGE PASSWORD</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={'Input New Password'}
                    placeholderTextColor={'#383838'}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Repeat Password'}
                    placeholderTextColor={'#383838'}
                    value={currentPassword}
                    onChangeText={(text) => setCurrentPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity
                    onPress={() => editPassword()}
                    style={styles.signUpButton} >
                    <Text style={styles.signUpText}>SAVE</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    main: {
        padding: 25,
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    blockHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 15,
        marginBottom: 25

    },
    headerText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        color: '#333333',
        lineHeight: 19,
        textAlign: 'center',
        marginLeft: 50,
    },
    input: {
        marginTop: 30,
        width: '90%',
        backgroundColor: '#F3F3F3',
        alignSelf: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#4F4F4F',
        borderRadius: 25,
        paddingLeft: 20,
        fontStyle: 'italic'
    },
    signUpButton: {
        width: '50%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        borderBottomWidth: 3,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 50

    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },
})