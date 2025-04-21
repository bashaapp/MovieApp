import React,{useContext} from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {icons,COLORS} from '../Constants';
//import { ThemeContext } from '../theme/themeContext';
import { HomeScreen } from '../Screens';




const Tab = createBottomTabNavigator();


const Tabs = ({navigation,})=>{

   
    //const {dark} = useContext(ThemeContext)

    return (
        <Tab.Navigator
           initialRouteName='Home'
           
           screenOptions={{
              tabBarActiveTintColor: COLORS.red,
              headerShown:false,
              tabBarStyle:{
             // backgroundColor: dark ? COLORS.darkColor : COLORS.gray3
             backgroundColor:COLORS.primary1,
             borderTopColor:COLORS.lightGrey20
             }
          
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            
            tabBarIcon: ({focused}) => (
               
               
              <Image source={icons.home} 
              style={{
                  width:25,
                  height:25,
                  tintColor: focused ? COLORS.red: COLORS.grey60
              }}
              />
             
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={HomeScreen}
          options={{
            
            tabBarIcon: ({focused}) => (
              <Image  source={icons.videos}   
              style={{
                width:24,
                height:24,
                tintColor: focused ? COLORS.red: COLORS.grey60

            }}/>
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={HomeScreen}
          options={{
           
            tabBarIcon: ({focused}) => (
              <Image source={icons.saved}   
              style={{
                width:30,
                height:30,
                tintColor: focused ? COLORS.red:COLORS.grey60

            }}  />
            ),
          }}
        />
        <Tab.Screen
          name="Download"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={icons.download} 
              style={{
                width:35,
                height:35,
                tintColor: focused ? COLORS.red: COLORS.grey60

            }} />
            
            ),
          }}
        />

         <Tab.Screen
          name="Me"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image source={icons.profile} 
              style={{
                width:30,
                height:30,
                tintColor: focused ? COLORS.red: COLORS.grey60

            }} />
            
            ),
          }}
        />
      </Tab.Navigator>
    );

}

export default Tabs;
