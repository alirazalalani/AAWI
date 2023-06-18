import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../../screens/IntroScreen';
import LoginScreen from '../../screens/LoginScreen';
import {StackNavigatorParamList} from '../types';
import WelcomeScreen from '../../screens/WelcomeScreen';
import DemographicScreen from '../../screens/DemographicScreen';
import AboutScreen from '../../screens/AboutScreen';
import CustomizeScreen from '../../screens/CustomizeScreen';
import AreaOfInterest from '../../screens/AreaOfInterest';
import ProfileScreen from '../../screens/ProfileScreen';
const Stack = createNativeStackNavigator<StackNavigatorParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="DemographicScreen" component={DemographicScreen} />
      <Stack.Screen name="AboutScreen" component={AboutScreen} />
      <Stack.Screen name="CustomizeScreen" component={CustomizeScreen} />
      <Stack.Screen name="AreaOfInterest" component={AreaOfInterest} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
