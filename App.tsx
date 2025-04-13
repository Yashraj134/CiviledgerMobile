import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './components/LandingPage';
import ViewTesting from './components/ViewTesting';
import ViewConsultancy from './components/ViewConsultancy';
import ViewTPA from './components/ViewTPA';
import TestingDetails from './components/TestingDetails';
import ConsultancyDetails from './components/ConsultancyDetails';
import TPADetails from './components/TPADetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} options={{ title: 'Civiledger App' }} />
        <Stack.Screen name="Testing" component={ViewTesting} options={{ title: 'Testing Services' }} />
        <Stack.Screen name="Consultancy" component={ViewConsultancy} options={{ title: 'Consultancy Services' }} />
        <Stack.Screen name="TPA" component={ViewTPA} options={{ title: 'Third Party Audit' }} />
        <Stack.Screen name="TestingDetails" component={TestingDetails} options={{ title: 'Testing Details' }} />
        <Stack.Screen name="ConsultancyDetails" component={ConsultancyDetails} options={{ title: 'Consultancy Details' }} />
        <Stack.Screen name="TPADetails" component={TPADetails} options={{ title: 'TPA Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}