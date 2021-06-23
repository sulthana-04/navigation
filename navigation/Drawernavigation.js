import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator} from '@react-navigation/drawer';
import { NavBarCustom } from '../src/Screens/NavBarCustom';
import Address from '../src/Screens/Address';
import Orders from '../src/Screens/Orders';
import Payment from '../src/Screens/Payment';
import Wallet from '../src/Screens/Wallet';
import Notification from '../src/Screens/Notification';
import Refer from '../src/Screens/Refer';
import Support from '../src/Screens/Support';
import Info from '../src/Screens/Info';
import Logout from '../src/Screens/Logout';


const Drawer = createDrawerNavigator();
export default function MainDrawerNavigator() {
  return(
   <NavigationContainer>
     <Drawer.Navigator drawerContent={props => <NavBarCustom {...props} />}
         drawerStyle={{
          width:410,
          height:730
        }}>
        <Drawer.Screen name="Address" component={Address}/>
        <Drawer.Screen name="Orders" component={Orders}/>
        <Drawer.Screen name="Payment" component={Payment}/>
        <Drawer.Screen name="Wallet" component={Wallet}/>
        <Drawer.Screen name="Notification" component={Notification}/>
        <Drawer.Screen name="Refer" component={Refer}/>
        <Drawer.Screen name="Support" component={Support}/>
        <Drawer.Screen name="Info" component={Info}/>
        <Drawer.Screen name="Logout" component={Logout}/>
      </Drawer.Navigator>
      </NavigationContainer>
   
  )
}

