import * as React from 'react';
import { Button, View, Text, Image, ScrollView, StyleSheet, StatusBar, Dimensions, ActivityIndicator, ImageComponent } from 'react-native';
import { Context } from './components/AuthContext/context';
import RegisterScreenComponent from './components/Auth/RegisterScreen';
import LoginScreenComponent from './components/Auth/LoginScreen';
import AuthScreenComponent from './components/Auth/AuthScreen';
import HensScreenComponent from './components/Main/HensScreen';
import RichHensScreenComponent from './components/Main/RichHensScreen';
import ChickenBabyScreenComponent from './components/Main/ChickenBabyScreen';
import OtherScreenComponent from './components/Main/OtherScreen';
import MarketScreenComponent from './components/Main/MarketScreenComponet';
import RichHensScreenMarketComponent from './components/Main/RichHensScreenMarket';
import ChickenBabysMarketScreenComponent from './components/Main/ChickenBabysMarketScreen';
import TimeLineScreenComponent from './components/Main/TimelineScreen';
import UserProfileScreenComponent from './components/Main/UserProfileScreen';
import UserProfileEditingScreenComponent from './components/Main/UserProfileEditing';
import EditNamePageScreenComponent from './components/Main/EditNamePage';
import EditPasswordPageScreenComponent from './components/Main/EditPasswordPage';
import TransactionPageScreenComponent from './components/Main/TransactionPageScreen';
import SingleChickenScreenComponent from './components/Main/SingleChickenPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect, NavigationContainer } from '@react-navigation/native';
import { useFonts, Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_100Thin, Inter_300Light, Inter_700Bold, Inter_800ExtraBold, Inter_900Black } from '@expo-google-fonts/inter';
import MarketBuyScreenComponent from './components/Main/MarketScreenBuy';
import RichMarketBuyScreenComponent from './components/Main/ChickenRichBuyScreen';
import ChickenBabyBuyScreenComponent from './components/Main/ChickenBabyBuyScreen';
import OtherSellScreenComponent from './components/Main/OtherSellPageScreen';
import OtherBuyScreenComponent from './components/Main/OtherBuyScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import SingleSellChickenScreenComponent from './components/Main/SingleSellChickenPage';

export default function App() {

  const [pageName, setPageName] = React.useState(null)
  const [pageNameRich, setPageNameRich] = React.useState(null)
  let [fontsLoaded] = useFonts({ Inter_200ExtraLight, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_100Thin, Inter_300Light, Inter_700Bold, Inter_800ExtraBold, Inter_900Black });

  const value = {
    pageName, setPageName,
    pageNameRich, setPageNameRich,
  }

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userToken: null,
  };


  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser, callback) => {
      // setIsLoading(true);
      const userToken = String(foundUser.userToken);
      console.log(userToken, "userToken");

      try {
        await AsyncStorage.setItem('userToken', userToken);
        console.log('userToken', userToken);
      } catch (e) {
        console.log(e, "error Signin");
      }
      dispatch({ type: 'LOGIN', userToken: userToken });
      callback();
    },
    signOut: async (callback) => {
      try {
        await AsyncStorage.removeItem('userToken');
        setIsLoading(false);

      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
      callback();
    },
    signUp: () => {
      // setIsLoading(false);
    }
  }), []);


  // Проверка при входе в приложение.

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        console.log(userToken, 'userToken');
        setIsLoading(false);
        console.log('test');
      } catch (e) {

        console.log(e);

      }
      dispatch({ type: 'RETRIEVE_TOKEN', userToken: userToken });
    }, 3000);
  }, []);


  if (isLoading) {
    return (
      <View></View>

    );
  }
  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <Context.Provider value={authContext}>
      <NavigationContainer>
        <StatusBar />
        {loginState.userToken === null ?
          (<Stack.Navigator initialRouteName="RegisterScreen"
            screenOptions={({ route }) => ({
              tabBarShowLabel: false,
              headerShown: false,
            })}>
            <Stack.Screen name="RegisterScreen" component={RegisterScreenComponent} />
            <Stack.Screen name="LoginScreen" component={LoginScreenComponent} />
          </Stack.Navigator>
          )
          :
          (
            <Stack.Navigator initialRouteName="RegisterScreen"
              screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
              })}>
              {/* <Stack.Screen name="RegisterScreen" component={RegisterScreenComponent} />
              <Stack.Screen name="AuthScreen" component={AuthScreenComponent} /> */}
              {/* <Stack.Screen name="LoginScreen" component={LoginScreenComponent} /> */}
              <Stack.Screen name="HensScreen" component={HensScreenComponent} />
              <Stack.Screen name="RichScreen" component={RichHensScreenComponent} />
              <Stack.Screen name="MarketScreen" component={MarketScreenComponent} />
              <Stack.Screen name="ChickenBabyScreen" component={ChickenBabyScreenComponent} />
              <Stack.Screen name="ChickenBabyMarketScreen" component={ChickenBabysMarketScreenComponent} />
              <Stack.Screen name="OtherScreen" component={OtherScreenComponent} />
              <Stack.Screen name="RichScreenMarket" component={RichHensScreenMarketComponent} />
              <Stack.Screen name="TimelineScreen" component={TimeLineScreenComponent} />
              <Stack.Screen name="UserProfileScreen" component={UserProfileScreenComponent} />
              <Stack.Screen name="UserProfileEditingScreen" component={UserProfileEditingScreenComponent} />
              <Stack.Screen name="EditNamePageScreen" component={EditNamePageScreenComponent} />
              <Stack.Screen name="EditPasswordPageScreen" component={EditPasswordPageScreenComponent} />
              <Stack.Screen name="TransactionPageScreen" component={TransactionPageScreenComponent} />
              <Stack.Screen name="SingleChickenScreen" component={SingleChickenScreenComponent} />
              <Stack.Screen name='MarketBuyScreen' component={MarketBuyScreenComponent} />
              <Stack.Screen name='RichMarketBuyScreen' component={RichMarketBuyScreenComponent} />
              <Stack.Screen name='ChickenBabyBuyScreen' component={ChickenBabyBuyScreenComponent} />
              <Stack.Screen name='OtherSellScreen' component={OtherSellScreenComponent} />
              <Stack.Screen name='OtherBuyScreen' component={OtherBuyScreenComponent} />
              <Stack.Screen name='SingleSellScreen' component={SingleSellChickenScreenComponent} />
            </Stack.Navigator>
          )
        }

      </NavigationContainer>
    </Context.Provider>
  );

}