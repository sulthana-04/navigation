import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Screens/Home';
//import Profile from './src/Screens/Profile';
import Alert from './src/Screens/Alert';
import Search from './src/Screens/Search';
import Cart from './src/Screens/Cart';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainDrawerNavigator from './Drawernavigation';
const Tab = createBottomTabNavigator();


export default function MainTabNavigator() {
  return (
   <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        activeTintColor:'orange',
        inactiveTintColor:'grey',
        
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Alerts') {
            iconName = focused
              ? 'bell'
              : 'bell-o';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search';
          }else if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          }else if (route.name === 'Cart') {
            iconName = focused ? 'shopping-cart' : 'shopping-cart';
          }else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={22} color={color} />;
        },
        
      })}
      >
        <Tab.Screen name="Alerts" component={Alert} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={MainDrawerNavigator} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}
