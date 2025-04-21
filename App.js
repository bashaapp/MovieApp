import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {MovieDetails} from './Screens';
import Tabs from './Navigation/Tabs';




const Stack = createNativeStackNavigator();




const App = ()=>{
  return(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={Tabs} />
    <Stack.Screen
      name="MovieDetails"
      component={MovieDetails}
      options={{
       presentation: 'modal',
        headerShown: false,
      }}
    />
  </Stack.Navigator></NavigationContainer>
  )
}





export default  App

