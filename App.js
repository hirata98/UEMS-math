import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import Start from './src/screens/start';
import Tabuada from './src/screens/estudo';
import Perguntas from './src/screens/perguntas';
import Calculadora from './src/screens/calculadora';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
        <Stack.Screen name="Teste" component={Start}/>
        <Stack.Screen name="Tabuada" component={Tabuada}/>
        <Stack.Screen name="Calculadora" component={Calculadora}/>
        <Stack.Screen name="A+B=?" component={Perguntas}/>
        <Stack.Screen name="A-B=?" component={Perguntas}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}
