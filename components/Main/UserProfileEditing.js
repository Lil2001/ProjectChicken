import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useEffect, useState } from 'react';
import Svg, { Path, Rect } from "react-native-svg"
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light } from '@expo-google-fonts/inter';
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
    { id: 1, image: require('../../assets/images/avatar1.png') },
    { id: 2, image: require('../../assets/images/avatar2.png') },
    { id: 3, image: require('../../assets/images/avatar3.png') },
    { id: 4, image: require('../../assets/images/avatar4.png') },
    { id: 5, image: require('../../assets/images/avatar5.png') },
    { id: 6, image: require('../../assets/images/avatar6.png') },
    { id: 7, image: require('../../assets/images/avatar7.png') },
    { id: 8, image: require('../../assets/images/avatar8.png') },
    { id: 9, image: require('../../assets/images/avatar9.png') },
    { id: 10, image: require('../../assets/images/avatar10.png') },
    { id: 11, image: require('../../assets/images/avatar11.png') },
    { id: 12, image: require('../../assets/images/avatar12.png') },
    { id: 13, image: require('../../assets/images/avatar13.png') },
    { id: 14, image: require('../../assets/images/avatar14.png') },
    { id: 15, image: require('../../assets/images/avatar15.png') },
    { id: 16, image: require('../../assets/images/avatar16.png') },
]

export default function UserProfileEditingScreenComponent({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    const [datas, setDatas] = useState([])
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    async function getUserData() {
        let userToken = await AsyncStorage.getItem('userToken');
        let AuthStr = 'Bearer ' + userToken;
        await fetch('https://api.richhens.com/api/v1/user', {
            method: 'GET',
            headers: {
                'Authorization': AuthStr,
                "content-type": "application/json",
            },
        })
            .then(response => response.json())
            .then(res => {
                setDatas(res.data.user)
            })
    }

    useEffect(() => {
        setAppState({ loading: true });
        getUserData()
    }, [setAppState])

    return (
        <SafeAreaView style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.modalSmallDiv}>
                        <View style={styles.selectAvatarDiv}>
                            <Text style={styles.selectAvatarText}>SELECT AVATAR</Text>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <Image style={{ width: 24, height: 24 }}
                                    source={require('../../assets/images/Frame26.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.avatarImageDiv}>
                            {data.map((value, index) => {
                                return (
                                    <TouchableOpacity key={index}>
                                        <Image
                                            style={{ width: 57, height: 57, marginLeft: 17, marginTop: 10 }}
                                            source={value.image}
                                        />
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                        <TouchableOpacity style={styles.signUpButton}>
                            <Text style={styles.signUpText}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <LinearGradient
                colors={['#F8F0CD', '#B6DAF6']}
                style={styles.block}
            >
                <View style={styles.blockHeader}>
                    <TouchableOpacity onPress={() => navigation.navigate('UserProfileScreen')}>
                        <Image
                            style={{ width: 37, height: 37 }}
                            source={require('../../assets/images/backArrow.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>PROFILE</Text>
                </View>
                <View style={styles.avatarBlock}>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'relative' }}>
                        <Image
                            style={{ width: 70, height: 70 }}
                            source={require('../../assets/images/avatar1.png')}
                        />
                        <Image
                            style={{ width: 29, height: 29, position: 'absolute', bottom: -5, right: -5 }}
                            source={require('../../assets/images/edit.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.textSecond}>{datas.email}</Text>
                </View>
            </LinearGradient>
            <View style={{ width: '100%', padding: 20 }}>
                <View style={styles.blockActivate}>
                    <Text style={styles.textActivate}>Name</Text>
                    <View style={styles.arrowDiv}>
                        <Text style={styles.textActivate}>{datas.nick}</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('EditNamePageScreen')} style={{ marginLeft: 20 }}>
                            <Svg width="10" height="12" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1 1L9 9L1 17" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.blockActivate}>
                    <Text style={styles.textActivate}>Password</Text>
                    <View style={styles.arrowDiv}>
                        <Text style={styles.textActivate}>Set</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('EditPasswordPageScreen')} style={{ marginLeft: 20 }}>
                            <Svg width="10" height="12" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M1 1L9 9L1 17" stroke="black" stroke-width="1.5" stroke-linecap="round" />
                            </Svg>
                        </TouchableOpacity>
                    </View>
                </View>
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
    block: {
        width: '100%',
        height: 190,
        padding: 25
    },
    avatarBlock: {
        width: '100%',
        marginTop: 15,
        alignItems: 'center'
    },
    textFirst: {
        fontFamily: 'Inter_500Medium',
        fontSize: 18,
        color: '#333333',
        lineHeight: 22,
        marginBottom: 5
    },
    textSecond: {
        fontFamily: 'Inter_300Light',
        fontSize: 14,
        color: '#333333',
        lineHeight: 17,
        fontStyle: 'italic',
        marginTop: 10
    },
    blockActivate: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 25,
    },
    arrowDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textActivate: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 13,
        color: '#454545',
        lineHeight: 16,
    },
    blockHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    headerText: {
        fontFamily: 'Inter_600SemiBold',
        fontSize: 16,
        color: '#333333',
        lineHeight: 19,
        textAlign: 'center',
        marginLeft: 100
    },
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333333',
        opacity: 0.9,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalSmallDiv: {
        width: 340,
        height: 430,
        backgroundColor: '#FFFFFF',
        borderRadius: 15
    },
    selectAvatarDiv: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    selectAvatarText: {
        textAlign: 'center',
        alignContent: 'center',
        marginRight: 55,
        fontFamily: 'Inter_600SemiBold',
        fontSize: 17,
        color: '#333333',
        lineHeight: 21,
    },
    avatarImageDiv: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 15,
        paddingTop: 0
    },
    signUpButton: {
        marginTop: 20,
        width: '30%',
        backgroundColor: '#FFF799',
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#333333',
        borderBottomWidth: 3,
        alignSelf: 'center'
    },
    signUpText: {
        textAlign: 'center',
        fontSize: 13,
        lineHeight: 16,
        fontFamily: 'Inter_600SemiBold',
        color: '#333333',
    },
})