import * as Notifications from 'expo-notifications'
 import * as Permissions from 'expo-permissions'
 import { StatusBar } from 'expo-status-bar'
 import { StyleSheet } from 'react-native'
 import { NativeBaseProvider } from 'native-base'
 import { NavigationContainer } from '@react-navigation/native'
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 import Timer from './components/Timer/Timer'
 import History from './components/History/History'
 import Settings from './components/Settings/Settings'
 import Footer from './components/Footer/Footer'
 import { useReducer, useEffect } from 'react'
 import { initialState, reducer } from './components/reducer/reducer'

 Notifications.setNotificationHandler({
   handleNotification: async () => {
     return {
       shouldShowAlert: true,
     }
   }
 })

 export default function App() {
   const Stack = createNativeStackNavigator();

   const [state, dispatch] = useReducer(reducer, initialState)

   const triggerNotifications = async () => {
     await Notifications.scheduleNotificationAsync({
       content: {
         title: "Pomodor'0",
         body: `Votre session de ${state.settings.workDuration}min avec ${state.settings.breakDuration}m de pause est terminée`,
       },
       trigger: null
     })
   }

   useEffect(() => {
     Permissions.getAsync(Permissions.NOTIFICATIONS)
       .then((statusObj) => {
         if (statusObj.status !== 'granted') {
           return Permissions.askAsync(Permissions.NOTIFICATIONS)
         }
         return statusObj
       })
       .then((statusObj) => {
         if (statusObj.status !== 'granted') {
           return
         }
       })
   }, [])

   return (
     <NativeBaseProvider>
       <NavigationContainer>
         <Stack.Navigator initialRouteName='Timer'>
           <Stack.Screen name='Timer'>
             {() => (
               <Timer
                 state={state}
                 dispatch={dispatch}
                 triggerNotifications={triggerNotifications}
               />
             )}
           </Stack.Screen>
           <Stack.Screen name='History'>
             {() => <History state={state} dispatch={dispatch} />}
           </Stack.Screen>
           <Stack.Screen name='Settings'>
             {() => <Settings state={state} dispatch={dispatch} />}
           </Stack.Screen>
         </Stack.Navigator>
         <Footer />
         <StatusBar style='auto' />
       </NavigationContainer>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  Text: {
    fontSize: 12
  }
})