import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import{createDrawerNavigator} from '@react-navigation/drawer'
import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import{GradesForm} from './app/screen/GradesForm'
import{ListGrade} from './app/screen/ListGrade'
import{contenidoA}from './app/screen/contenidoA'
import{contenidoB}from './app/screen/contenidoB'
import{salirApli} from './app/screen/salir'
import { Tab } from '@rneui/base';

export default function App() {

  const StackGrades= createStackNavigator();
  const Nav =createBottomTabNavigator();

  const TabNav=()=>{
    return (
      <Nav.Navigator>
        <Nav.Screen
          name='contenidoA'
          component={contenidoA}
          options={{
            headerShown: false,
            tabBarLabel:"configuracion"
          }}
        />

        <Nav.Screen
          name='contenidoB'
          component={contenidoB}
          options={{
            headerShown: false,
            tabBarLabel:"detalles"
          }}
        />
      </Nav.Navigator>
    )
  }

  const Drawer= createDrawerNavigator();
  return (
    // <NavigationContainer>
    //   <StackGrades.Navigator>
    //     <StackGrades.Screen name='ListGrade' component={ListGrade}/>
    //     <StackGrades.Screen name='GradesForm' component={GradesForm}/>
        
    //   </StackGrades.Navigator>

    // </NavigationContainer>

    <NavigationContainer> 

            <Drawer.Navigator>
                  <Drawer.Screen
                      name="ListaNotasNav"
                      component={ListGrade}
                      options={{
                          title:"lista de productos",
                          }}
    
                   />

                    <Drawer.Screen
                      name="Ejemplo TAb"
                      component={TabNav}
                      options={{
                          title:"Ejemplo Tab",
                          }}
    
                     />
                      <Drawer.Screen
                      name="NotNav"
                      component={salirApli}
                      options={{
                          title:"Salir",
                          }}
    
                     />

                 
  
              </Drawer.Navigator>

              

             
      
    </NavigationContainer>

    

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
