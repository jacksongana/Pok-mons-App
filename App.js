import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 milliseconds = 5 seconds
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
