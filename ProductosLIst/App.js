import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View , FlatList, TextInput, Button, Alert, TouchableOpacity, Modal, Pressable} from 'react-native';

let productos=[
  {nombre:'chitos', categoria:'snack',precioCompra:0.40, precioVenta:0.60, id: 1},
  {nombre:'caramelos', categoria:'snack',precioCompra:0.4, precioVenta:0.10, id: 2},
  {nombre:'chifles', categoria:'snack',precioCompra:0.40, precioVenta:0.80, id: 3},
  {nombre:'cola', categoria:'bebida',precioCompra:0.60, precioVenta:0.90, id: 4},
  {nombre:'cerveza', categoria:'bebida',precioCompra:1.00, precioVenta:1.50, id: 5},
  

]

let esNuevo=true;
let indiceSelecionado= -1;
let editable= false;

export default function App() {

  const[txtcodigo,setCodigo]=useState()
  const[txtnombre,setnombre]=useState()
  const[txtcategoria,setcategoria]=useState()
  const[txtprecioCompra,setPrecioCompra]=useState()
  const[txtprecioVenta,setPrecioVenta]=useState()
  const[numeroElementos,setNumeroElementos]=useState(productos.length);

  const [modalVisible, setModalVisible] = useState(false);

  let limpiar=()=>{
    setCodigo(null)
    setnombre(null)
    setcategoria(null)
    setPrecioCompra(null)
    setPrecioVenta(null)
    esNuevo=true
  }

 

  let existeProducto=()=>{
    for(let i= 0; i<productos.length; i++){
      if(productos[i].id== txtcodigo){
        return true;
      
      }
  
    }
    return false;
  }

  

  


  let guardarProducto=()=>{
    if(esNuevo){

      if(existeProducto()){
        Alert.alert("mensaje", "ya existe un producto con el codigo: "+ txtcodigo)

      }else{

        let agregar= {nombre:txtnombre, categoria:txtcategoria,precioCompra:txtprecioCompra, precioVenta:txtprecioVenta, id: txtcodigo}
        productos.push(agregar)

      }
    
    }else{
   
      productos[indiceSelecionado].nombre=txtnombre
      productos[indiceSelecionado].categoria=txtcategoria
      productos[indiceSelecionado].precioCompra=txtprecioCompra
    }
    
    limpiar()
    setNumeroElementos(productos.length)
  }

  
  let CompomenteProductos=(props)=>{
    return <View  style={styles.productos}>
              <View style={styles.indice}>
                <Text>{props.indice}</Text>

             </View>
              <View style={styles.contenedorProductos}>
                  <Text >{props.productos.nombre} ({props.productos.categoria})</Text>
                  <Text> USD: {props.productos.precioVenta} </Text> 

              </View>
              <View  style={styles.accionBotones}>

              <TouchableOpacity 
                      style={[styles.button, styles.botonEditar]}
                      
                      onPress={()=>{
                        setCodigo(props.productos.id)
                        setnombre(props.productos.nombre)
                        setcategoria(props.productos.categoria)
                        setPrecioCompra(props.productos.precioCompra)
                        esNuevo= false;
                        indiceSelecionado= props.indice

                      }}>
                     <Text>editar</Text>
              </TouchableOpacity>
                {/* <Button
                  title='editar'
                  color='green'
                  onPress={()=>{
                    setCodigo(props.productos.id)
                    setnombre(props.productos.nombre)
                    setcategoria(props.productos.categoria)
                    setPrecioCompra(props.productos.precioCompra)
                    
                    esNuevo= false;
                    indiceSelecionado= props.indice
                  }}
                /> */}
                {/* <Button
                  title='eliminar'
                  color='red'
                  onPress={()=>{
                   indiceSelecionado= props.indice
                   productos.splice(indiceSelecionado,1)
                   setNumeroElementos(productos.length)
                  }}
                /> */}

<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Esta seguro que quiere eliminar!</Text>
            <Pressable
              style={[styles.button, styles.buttonAceptar]}
              onPress={()=>{
                    indiceSelecionado= props.indice
                   productos.splice(indiceSelecionado,1)
                   setNumeroElementos(productos.length)
                   setModalVisible(!modalVisible)

              }}>
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>eliminar</Text>
      </Pressable>


      </View>
   </View>
  }


  return (

    
    <View style={styles.container}>
      <View style={styles.cabecera}>
      <Text >PRODUCTOS</Text>

      <TextInput
        style={styles.txtIngreso}
        value={txtcodigo}
        onChangeText={setCodigo}
        placeholder='ingrese el codigo'
        keyboardType='numeric'
        editable={esNuevo}
      />
      <TextInput
        style={styles.txtIngreso}
        value={txtnombre}
        onChangeText={setnombre}
        placeholder='ingrese el nombre'
      />

      <TextInput
        style={styles.txtIngreso} 
        value={txtcategoria}
        onChangeText={setcategoria}
        placeholder='ingrese la categoria'
      />
      <TextInput
        style={styles.txtIngreso}
        value={txtprecioCompra}
        onChangeText={(txt)=>{
          setPrecioCompra(txt)
          // setear precio de venta 
          const precioVenta = (parseFloat(txt)+ parseFloat(txt)* 0.2).toFixed(2)
          setPrecioVenta(precioVenta)

        }}
        placeholder='ingrese el precio de compra'
        keyboardType='numeric'
      />

      <TextInput
        style={styles.txtIngreso}
        value={txtprecioVenta}
        onChangeText={setPrecioVenta}
        placeholder='ingrese el precio de venta'
        keyboardType='numeric'

      />
      </View>
      <View style={styles.botonArea}>
        <Button
          title='Guardar'
          onPress={()=>{

          
              guardarProducto()

            }


            }
            
            

           
        
          
        />
        <Button
          title='Nuevo'
          onPress={()=>{
            limpiar()
          }}
        />

        <Text>Numero: {numeroElementos}</Text>
      </View>
    
      <StatusBar style="auto" />

      <View style={styles.contenido}>


      <FlatList 
        

        data={productos}
        renderItem={(elemento)=>{
          return <CompomenteProductos  indice={elemento.index} productos={elemento.item} />
         

        }}

        keyExtractor={(txt)=>{
          return txt.id;
        }}

      
      />

      </View>

      <View style={styles.piePagina} >
        <Text>Autor: JONATHAN ZHIÑA</Text>

      </View>


    </View>
  );
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    
    paddingTop:60,
   

  },

  productos:{
    backgroundColor: '#ffe4b5',
    margin:5,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'stretch'   
  },

  titulo:{
    backgroundColor: '#778899',

  },
  cabecera:{
    flex:3,
    backgroundColor: '#da70d6',
    flexDirection: 'colum'

  },
  txtIngreso:{
    borderWidth: 1,
    borderColor:'red',
    paddingTop:5,
    paddingLeft:10,
    margin: 5

  },

  botonArea:{
    flexDirection:'row',
    justifyContent:'space-around',


  },

  contenido:{
    flex:5,
    backgroundColor: '#cd853f',

  },
  piePagina:{
    flex:1,
    backgroundColor: 'red',
    flexDirection:'row',
    justifyContent:'center'

  },

  indice:{
    flex:1,
    backgroundColor: 'darkgray',
    justifyContent:'center',
    fontSize:5,
    marginRight:5

  },
  contenedorProductos:{
    flex:4,
    backgroundColor:'cornflowerblue'
  },

  accionBotones:{
    flex:2,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:20,
    padding:5,
    margin:5,
    marginRight:30


  },

  // estilos del modal 
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: 'red',
  },
  buttonAceptar:{
    backgroundColor:'green'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  botonEditar:{
    backgroundColor:'green'

  }

});
