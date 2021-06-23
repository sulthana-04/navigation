import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import { Drawer,Text } from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
export function NavBarCustom(props,{navigation}) {
  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <DrawerContentScrollView {...props}>
      <Drawer.Section style={{height:90}}>
      <Image source={require('../images/icon.jpg')}style={styles.picture}>
       </Image>
       <Text style={styles.text}>Jane Doe</Text>
       <FontAwesome5 size={20} name="edit" style={styles.icon}/>
       <Text style={styles.text1}>9990009999</Text>
        </Drawer.Section>
      <Drawer.Section style={{marginTop:50,margin:5}} >
        <DrawerItem style={styles.drawer}
           labelStyle={styles.label}
           icon={()=>(
            <Ionicons
          name="location-outline"
          size={25}
          style={styles.icon1}
          />
          )}
            label="Change address"
            onPress={() => {
              props.navigation.navigate('Address');
            }}
          />
          <DrawerItem style={styles.drawer}
          labelStyle={styles.label}
           icon={()=>(
            <Ionicons
          name="md-cart-outline"
          size={25}
          style={styles.icon1}
          />
          )}
            label="Your orders"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
          /><DrawerItem style={styles.drawer}
          labelStyle={styles.label}
          icon={()=>(
           <AntDesign
         name="creditcard"
         size={23}
          style={styles.icon1}
         />
         )}
           label="Payment"
           onPress={() => {
             props.navigation.navigate('Payment');
           }}
         />
         <DrawerItem style={styles.drawer}
           labelStyle={styles.label}
           icon={()=>(
            <AntDesign
          name="wallet"
          size={23}
          style={styles.icon1}
          />
          )}
            label="Wallet"
            onPress={() => {
              props.navigation.navigate('Wallet');
            }}
          />
          <DrawerItem style={styles.drawer}
          labelStyle={styles.label}
           icon={()=>(
            <AntDesign
          name="bells"
          size={23}
          style={styles.icon1}
          />
          )}
            label="Notification"
            onPress={() => {
              props.navigation.navigate('Notification');
            }}
          />
          
         
          </Drawer.Section>
          <Drawer.Section style={{marginTop:-10,margin:5}} >
        <DrawerItem style={styles.drawer}
           labelStyle={styles.label}
           icon={()=>(
            <Feather
          name="users"
          size={25}
          style={styles.icon1}
          />
          )}
            label="Refer a friend"
            onPress={() => {
              props.navigation.navigate('Refer');
            }}
          />
          <DrawerItem style={styles.drawer}
          labelStyle={styles.label}
           icon={()=>(
            <MaterialCommunityIcons
          name="headset"
          size={25}
          style={styles.icon1}
          />
          )}
            label="Support"
            onPress={() => {
              props.navigation.navigate('Support');
            }}
          /><DrawerItem style={styles.drawer}
          labelStyle={styles.label}
          icon={()=>(
           <Ionicons
         name="information-circle-outline"
         size={23}
          style={styles.icon1}
         />
         )}
           label="Info"
           onPress={() => {
             props.navigation.navigate('Info');
           }}
         />
         <DrawerItem style={styles.drawer}
           labelStyle={styles.label}
           icon={()=>(
            <MaterialIcons
          name="logout"
          size={23}
          style={styles.icon1}
          />
          )}
            label="Logout"
            onPress={() => {
              props.navigation.navigate('Logout');
            }}
          />
          </Drawer.Section>
        
          
    </DrawerContentScrollView>
  </View> 
   );
  }  
  const styles=StyleSheet.create({
        picture:{
          borderRadius:20,
          width:80,
          height:80,
          top:40,
          left:20
        },
        text:{
          fontSize:23,
          left:120,
          top:-20,
          fontWeight:'bold'
        },
        text1:{
          fontSize:14,
          left:123,
          top:-36,
          color:'grey'
          //fontWeight:'bold'
        },
        icon:{
          left:238,
          top:-48,
          color:'grey'
        },
        drawer:{
         // height:70,
          top:20,
          margin:40
          
        },
        label:{
          fontSize:16,
          color:'grey',
          fontWeight:'900'
        },
        icon1:{
          color:'grey'
        }
  })
  
