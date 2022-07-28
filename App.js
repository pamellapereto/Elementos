import TelaPrincipal from './screens/TelaPrincipal';
import TelaCamera from './screens/TelaCamera';
import TelaCodebar from './screens/TelaCodebar';
import TelaGaleria from './screens/TelaGaleria';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>

        <Stack.Navigator
        initialRouteName="TelaPrincipal"
        screenOptions={{
          headerShown: false }}
        >

          <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}/>
          <Stack.Screen name="TelaCamera" component={TelaCamera} />
          <Stack.Screen name="TelaGaleria" component={TelaGaleria} />
          <Stack.Screen name="TelaCodebar" component={TelaCodebar} />



        </Stack.Navigator>

    </NavigationContainer>

  );
}

