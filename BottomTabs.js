import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RoomAllocationScreen from '../screens/RoomAllocationScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Ionicons name="home-outline" size={20} /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: () => <Ionicons name="person-outline" size={20} /> }}
      />
      <Tab.Screen
        name="Room Allocation"
        component={RoomAllocationScreen}
        options={{ tabBarIcon: () => <Ionicons name="bed-outline" size={20} /> }}
      />
    </Tab.Navigator>
  );
}
