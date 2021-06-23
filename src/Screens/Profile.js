import React from 'react';
import { Text,View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavBarCustom } from '../src/Screens/NavBarCustom';
import Address from './Address';
import Orders from './src/Screens/Orders';
import Payment from './src/Screens/Payment';
import Wallet from './src/Screens/Wallet';
import Notification from './src/Screens/Notification';
import Refer from './src/Screens/Refer';
import Support from './src/Screens/Support';
import Info from './src/Screens/Info';
import Logout from './src/Screens/Logout';


const Profile =({}) =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Welcome to profile</Text>
        </View>
    )
}
export default Profile;
const Drawer = createDrawerNavigator({
    Address:{
        screen:'Address'
    },
    Orders:{
        screen:'Orders'
    },
    Payment:{
        screen:'Payment'
    },
    Wallet:{
        screen:'Wallet'
    },
    Notification:{
        screen:'Notification'
    },
    Refer:{
        screen:'Refer'
    },
    Support:{
        screen:'Support'
    },
    Info:{
        screen:'Info'
    },
    Logout:{
        screen:'Logout'
    },
})
