
import {View, StyleSheet, } from 'react-native'
import { Input, Button} from '@rneui/base';
import { useState } from 'react';

import{guardar, Actualizar} from '../services/GradesServices'

export const GradesForm=({navigation, route})=>{
    let esnNuevo= true;
    let materiaRecuperada;
    let notaRecuperada;

    if( route.params.notita!= null){
        esnNuevo= false;
    }

    if(!esnNuevo){
        materiaRecuperada= route.params.notita.materia;
        notaRecuperada= route.params.notita.nota;
    }




    const[materia, setMateria]=useState(materiaRecuperada);
    const[nota, setNota]=useState(notaRecuperada==null?null:notaRecuperada+"");
    const[errorMateria, setErrorMateria]=useState();
    const[errorNota, setErrorNota]=useState();

    const hayErrores= false;

    

    let save=()=>{
        setErrorMateria(null)
        setErrorNota(null)
        validacion();
        if(!hayErrores){
            if(esnNuevo){
                guardar({materia:materia, nota:nota});

            }else{
                Actualizar({materia:materia, nota:nota});
            }
          
            navigation.goBack();
            route.params.fnRefrescar();

        }
        
        
    }

    const validacion=()=>{
        if(materia== null || materia==""){
            setErrorMateria("debe ingresar una materia")
            hayErrores= true;

        }
        let intNota = parseFloat(nota);
        if(intNota== null || isNaN(intNota) || intNota<0 || intNota>10){
            setErrorNota("debe ingresar una nota entre o -10")
            hayErrores=true;

        }
    }
    return <View style={styles.container}>
          <Input
            value={materia}
            onChangeText={setMateria}
            placeholder='Ejemplo: matematica'
            label= 'materia'
            errorMessage={errorMateria}
            disabled= {!esnNuevo}
        />
          <Input
            value={nota}
            onChangeText={setNota}
            placeholder='Ejemplo: 0-10'
            label= 'nota'
            errorMessage={errorNota}
        />
        <Button
            buttonStyle={styles.buttonSave}
            title='guardar'
            icon= {{
                name: 'save',
                type: 'entypo',
                color:'white'

            }}

            onPress={save}

           
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

    buttonSave:{
        backgroundColor: 'green'

    }

  });
  