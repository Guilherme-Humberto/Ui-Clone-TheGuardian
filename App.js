import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo'

import { 
  PlayfairDisplay_400Regular, 
  PlayfairDisplay_500Medium, 
  PlayfairDisplay_700Bold,
  PlayfairDisplay_900Black,
  useFonts 
} from '@expo-google-fonts/playfair-display'

import {
  Roboto_500Medium,
  Roboto_400Regular
} from '@expo-google-fonts/roboto'

import { 
  Lusitana_700Bold,
} from '@expo-google-fonts/lusitana'

import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_900Black,
    Roboto_500Medium,
    Lusitana_700Bold,
    Roboto_400Regular
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar  style="light"/>
      <Routes />
    </>
  );
}
