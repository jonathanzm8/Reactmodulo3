import { View, StyleSheet, Alert} from 'react-native'
import { Button, Input, Text } from '@rneui/base'
import {useState} from 'react'
import {createPostService,createPostDocumentService} from '../services/TestServices'

export const PostForm = () => {
    const [subject,setSubject]=useState();
    const [message,setMessage]=useState();

    const [codigo,setCodigo]=useState();
    const [descripcion,setDescripcion]=useState();

    const createPost=()=>{
        console.log("creando post "+codigo+" "+descripcion);
    
        createPostDocumentService(
            {
                title:codigo,
                body:descripcion
            }
        );
        ()=>{
            Alert.alert("CONFIRMACION","SE HA CREADO EL NUEVO DOCUMENTO")
        }
    
        
    }
    return <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text h4="true">TIPO DE DOCUMENTO</Text>
        </View>
        <View style={styles.formContainer}>            
            <Input
                placeholder='Codigo'
                value={codigo}
                onChangeText={(value)=>{
                    setCodigo(value);
                }}
            />
            <Input
                placeholder='Descripcion'
                value={descripcion}
                onChangeText={(value)=>{
                    setDescripcion(value);
                }}
            />
            <Button 
                title="Guardar"
                onPress={createPost}
            />
        </View>

    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginVertical: 10
    },
    formContainer: {
        flex: 7,
        flexDirection:'column',
        justifyContent:'center'

    }
});
