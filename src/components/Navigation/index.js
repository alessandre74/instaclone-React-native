import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../../pages/Home'
import SearchScreen from '../../pages/Search'
import CameraScreen from '../../pages/Camera'
import ActivityScreen from '../../pages/Activity'
import ProfileScreen from '../../pages/Profile'

import icons from '../Navigation/icons'
import Header from '../Header'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        const routeName = route.name === 'Home' ? true : false

        return {
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#000',
          tabBarShowLabel: false,
          headerShown: routeName,
          title: <Header />,
          tabBarIcon: ({ color, size, focused }) => {
            const { lib: Icon, name, focus } = icons[route.name]

            return <Icon name={focused ? focus : name} color={color} size={size} />
          }
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Camera" component={CameraScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
