import {View, Text, StyleSheet} from 'react-native'


export const contenidoB=()=>{
    return <View style={styles.container}>
        <Text>estamos en el contenidoB</Text>
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