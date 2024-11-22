import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './navigation/BottomTabs';
import HomeScreen from './screens/HomeScreen';
import StaffOrStudentScreen from './screens/StaffOrStudentScreen';
import AuthScreen from './screens/AuthScreen';
import RoomAllocationScreen from './screens/RoomAllocationScreen';
import PaymentScreen from './screens/PaymentScreen';
import ConfirmationScreen from './screens/ConfirmationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="StaffOrStudent" component={StaffOrStudentScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="RoomAllocation" component={RoomAllocationScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
