
import {View, StyleSheet, FlatList, Text, TouchableHighlight} from 'react-native'
import { Input, ListItem } from '@rneui/base';
import { FAB } from '@rneui/themed';
import { } from '@rneui/themed';

import{getGrades} from '../services/GradesServices'
import { useState } from 'react';


export const ListGrade=({navigation})=>{

  const[time, setTime]=useState()

  const refrescarList=()=>{
    setTime(new Date().getTime()); // esto siempre cambia y refresca
  }
  // creacion de un componente
  const ListaNotas=({listado})=>{
    return <TouchableHighlight onPress={()=>{
      navigation.navigate("GradesForm",{notita:listado, fnRefrescar:refrescarList})
    }}>
     <ListItem  bottomDivider>
              
          
      
            <Text>{listado.materia}: {listado.nota}</Text>

        </ListItem>

        </TouchableHighlight>
     
    
  }
   
    return <View style={styles.container}>
      <FlatList
        data={getGrades()}
        renderItem={({item})=>{

          return <ListaNotas listado={item}/>

        }}

        keyExtractor={(item)=>{
          return item.materia

        }}

        extraData={time}
      
      
      />
      <FAB
        title='+'
        onPress={()=>{
          navigation.navigate("GradesForm",{notita:null,fnRefrescar:refrescarList})
        }}
      />
      
    </View>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  