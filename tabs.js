import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, Image } from 'react-native'
import AuthScreenComponent from './components/Auth/AuthScreen'
import LoginScreenComponent from './components/Auth/LoginScreen'
import RegisterScreenComponent from './components/Auth/RegisterScreen'
import ChickenBabyScreenComponent from './components/Main/ChickenBabyScreen'
import EditNamePageScreenComponent from './components/Main/EditNamePage'
import EditPasswordPageScreenComponent from './components/Main/EditPasswordPage'
import HensScreenComponent from './components/Main/HensScreen'
import MarketScreenComponent from './components/Main/MarketScreenComponet'
import OtherScreenComponent from './components/Main/OtherScreen'
import RichHensScreenComponent from './components/Main/RichHensScreen'
import TimeLineScreenComponent from './components/Main/TimelineScreen'
import UserProfileEditingScreenComponent from './components/Main/UserProfileEditing'
import UserProfileScreenComponent from './components/Main/UserProfileScreen'

import TransactionPageScreenComponent from './components/Main/TransactionPageScreen'
import RichHensScreenMarketComponent from './components/Main/RichHensScreenMarket'
import ChickenBabysMarketScreenComponent from './components/Main/ChickenBabysMarketScreen'
const Tab = createBottomTabNavigator()
export default function MyTabs() {
   
    return (
        <Tab.Navigator
            initialRouteName="RegisterScreen"
            backBehavior={"history"}
            unmountOnBlur={true}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    height: 80,
                    width: '100%',

                }
            }}
        >

            <Tab.Screen
                name='RegisterScreen'
                component={RegisterScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                })}
            />
            <Tab.Screen
                name='LoginScreen'
                component={LoginScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                })}
            />
            <Tab.Screen
                name='AuthScreen'
                component={AuthScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                })}
            />

            <Tab.Screen
                name='RichScreen'
                component={RichHensScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }
                })}
            />
            <Tab.Screen
                name='RichScreenMarket'
                component={RichHensScreenMarketComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,

                })}
            />
            <Tab.Screen
                name='ChickenBabyMarketScreen'
                component={ChickenBabysMarketScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,

                })}
            />
            <Tab.Screen
                name='ChickenBabyScreen'
                component={ChickenBabyScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
            />
            <Tab.Screen
                name='OtherScreen'
                component={OtherScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,

                })}
            />

            <Tab.Screen
                name='UserProfileScreen'
                component={UserProfileScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
            />
            <Tab.Screen
                name='UserProfileEditingScreen'
                component={UserProfileEditingScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
            />

            <Tab.Screen
                name='EditNamePageScreen'
                component={EditNamePageScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
            />
            <Tab.Screen
                name='EditPasswordPageScreen'
                component={EditPasswordPageScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
            />

            <Tab.Screen
                name='TransactionPageScreen'
                component={TransactionPageScreenComponent}
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
            />


            <Tab.Screen
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
      
                name='HensScreen' component={HensScreenComponent} />
            <Tab.Screen
                options={({ route }) => ({
                    tabBarButton: () => null,
                    tabBarStyle: { display: 'none' }

                })}
                // options={{
                //     tabBarIcon: ({ focused }) => (
                //         <View
                //             style={{
                //                 alignItems: 'center'
                //             }}
                //         >
                //             <Image
                //                 style={{
                //                     width: 30,
                //                     height: 31,
                //                     tintColor: focused ? '#3F3F3F' : '#9E9797'
                //                 }}
                //                 source={require('./assets/images/imgfooter2.png')}
                //             />
                //             <Text
                //                 style={{
                //                     fontSize: 9,
                //                     marginTop: 1,
                //                     color: focused ? '#3F3F3F' : '#A09999',
                //                     lineHeight: 11,
                //                     fontFamily: 'Inter_500Medium'

                //                 }}
                //             >TIMELINE</Text>
                //         </View>
                //     )
                // }}
                name='TimeLineScreen' component={TimeLineScreenComponent} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                style={{
                                    width: 30,
                                    height: 31,
                                    tintColor: focused ? '#3F3F3F' : '#9E9797'
                                }}
                                source={require('./assets/images/imgfooter3.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 9,
                                    marginTop: 1,
                                    color: focused ? '#3F3F3F' : '#A09999',
                                    lineHeight: 11,
                                    fontFamily: 'Inter_500Medium'

                                }}
                            >SOCIAL</Text>
                        </View>
                    )
                }}
                name='Social' component={''} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                style={{
                                    width: 30,
                                    height: 31,
                                    tintColor: focused ? '#3F3F3F' : '#9E9797'
                                }}
                                source={require('./assets/images/imgfooter4.png')}
                            />
                            <Text
                                style={{
                                    fontSize: 9,
                                    marginTop: 1,
                                    color: focused ? '#3F3F3F' : '#A09999',
                                    lineHeight: 11,
                                    fontFamily: 'Inter_500Medium'

                                }}
                            >MARKET</Text>
                        </View>
                    )
                }}
                name='MarketScreen' component={MarketScreenComponent} />
        </Tab.Navigator>
    )
}