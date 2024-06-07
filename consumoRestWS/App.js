import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {TestWebServices} from './screens/TestWebServices'
import{PostForm} from './screens/PostForm'
export default function App() {
  const StackProducts = createNativeStackNavigator(); 
  return (
    <NavigationContainer>
      <StackProducts.Navigator initialRouteName='PosFormView'>
        <StackProducts.Screen name="TestWebServicesNav"  component={TestWebServices}/>
        <StackProducts.Screen name="PosFormView"  component={PostForm} options={{title:'MENSAJES'}}/>
      </StackProducts.Navigator>
    </NavigationContainer>
  );
}
