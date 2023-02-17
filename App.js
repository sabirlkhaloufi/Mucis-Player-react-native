import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Musics from './src/screens/Musics';
import {Colors} from './src/assets/styles/Colors';
import Player from './src/screens/Player';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: "#0F0817",
  },
};

const App = () => {
  return (
    <>
   <StatusBar barStyle="white" backgroundColor="#0F0817" />
   <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Musics" component={Musics} options={{ headerShown: false }} />
        <Stack.Screen name="Player" component={Player} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
