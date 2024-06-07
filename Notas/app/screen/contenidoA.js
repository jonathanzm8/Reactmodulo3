
import { StyleSheet, Text, View } from 'react-native';

export const contenidoA=()=>{
    return <View style={styles.container}>
        <Text>Bienvenidos a la configuracion</Text>
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