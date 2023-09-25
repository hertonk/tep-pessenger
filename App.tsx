import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login';
import ConfirmSMS from './src/screens/ConfirmSMS';
import Dashboard from './src/screens/Dashboard';
import SearchTravel from './src/screens/SearchTravel';
import SearchResult from './src/screens/SearchResult';
import RegisterFinish from './src/screens/RegisterFinish';
import RegisterStep3 from './src/screens/RegisterStep3';
import RegisterStep2 from './src/screens/RegisterStep2';
import RegisterStep1 from './src/screens/RegisterStep1';
import TravelChat from './src/screens/TravelChat';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ConfirmSMS" component={ConfirmSMS} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SearchTravel" component={SearchTravel} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="RegisterStep1" component={RegisterStep1} />
        <Stack.Screen name="RegisterStep2" component={RegisterStep2} />
        <Stack.Screen name="RegisterStep3" component={RegisterStep3} />
        <Stack.Screen name="RegisterFinish" component={RegisterFinish} />
        <Stack.Screen name="TravelChat" component={TravelChat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}