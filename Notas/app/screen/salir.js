
import { StyleSheet, Text, View } from 'react-native';

export const salirApli=()=>{
    return <View style={styles.container}>
        <Text>salio de la aplicacion</Text>
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