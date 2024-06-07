import { View, StyleSheet } from 'react-native'
import { Button, Text } from '@rneui/base'

import{getAllPostsService, createPostService, updatePostService, getByUserIdService, postxxxService, getyyyService, getzzzService,getDocumentTypes} from '../services/TestServices'




export const TestWebServices = () => {

  const getAllPosts=()=>{
    getAllPostsService();
  }

  const createPost=()=>{
    createPostService();
  }

  const updatePost=()=>{
    updatePostService();
  }

  const getUserId=()=>{
    getByUserIdService();

  }
   const getxx=()=>{
    postxxxService();
   }

   const getyyy=()=>{
    getyyyService();
   }
    const getzz=()=>{
      getzzzService();


    }
  const getDocument=()=>{
    getDocumentTypes();
    

  }

  return <View style={styles.container}>
    <Text style={styles.textContainer}>MODULO 3</Text>
    <View style={styles.buttonContainer}>
      <Button
        title="Recuperar Posts"
        onPress={getAllPosts}
        
      />
      <Button
        title="Crear Post"
        onPress={createPost}
      />
        <Button
        title="Actualizar Post"
        onPress={updatePost}
      />
        <Button
        title="Filtrar"
        onPress={getUserId}
      />
          <Button
        title="XXX"
        onPress={getxx}
      />

      <Button
        title="YYY"
        onPress={getyyy}
      />

      <Button
        title="ZZZ"
        onPress={getzz}
      />
      <Button
        title="tipos de documentos"
        onPress={getDocument}
      />
      
    </View>
  </View>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 10
  },
  buttonContainer: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    marginHorizontal:10

  }
});