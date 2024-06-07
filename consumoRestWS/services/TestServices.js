import { Alert } from "react-native"

// funcion para recuperar los post
 export const getAllPostsService=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})
 }


 // funcion para crear los posts

 export const createPostService=(post,fnExito)=>{
    const config={
        method:'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body,
            userId: 1,
        }),
        
      
        headers:{
            'Content-Type':'application/json',
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts', config)
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json);fnExito();})
    fnExito=()=>{
        Alert.alert("CONFIRMACION","Se ha ingresado el nuevo post")
    }
    
  
 }

// para crear tipo de documento
 export const createPostDocumentService=(post,fnExito)=>{
    const config={
        method:'POST',
        body: JSON.stringify({
            codigo: post.title,
            descripcion: post.body,
        }),
        headers:{
            'Content-Type':'application/json',
        }
    }
    fetch('http://192.168.0.5:8080/inventarios/rest/tiposDocumentos/crear', config)
    .then((response) => {
        if (response.body == null) {
            return { "message": "completado" }
        } else {
            return response.json()
        }
        }).then((json) => { console.log(json); fnExito(); });

        fnExito=()=>{
            Alert.alert("CONFIRMACION","Tipo de documento ingresado correctamente")
        }
 
  
 }

    // .then((response) => {
    // if (response.body == null) {
    //     return { "message": "completado" }
    // } else {
    //     return response.json()
    // }
    // }).then((json) => { console.log(json); fnExito(); });



 // para actualizar metodo put
 export const updatePostService=()=>{
    const config={
        method:'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'mensaje final',
            body: 'hasta la vista baby',
            userId: 1,
        }),
        headers:{
            'Content-type':'application/json',
        }
    }
    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})
    
  
 }

 // filtrar por userId

 export const getByUserIdService=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})
 }

 // boton xxx metodo post
 export const postxxxService=()=>{
    const config={
        method:'POST',
        body: JSON.stringify({
            title: 'tes producto',
            price: 12,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        }),
        headers:{
            'Content-type':'application/json',
        }
    }
    fetch('https://fakestoreapi.com/products', config)
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})
 }

// boton yyy metodo get
 export const getyyyService=()=>{

    fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})
 }

 // boton zzz metodo get 

 export const getzzzService=()=>{
    fetch('https://pokeapi.co/api/v2/encounter-method/1/')
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})


 }

// funcion para invocar a web service

export const getDocumentTypes=()=>{
    fetch('http://192.168.0.5:8080/inventarios/rest/tiposDocumentos/recuperar')
    .then((response)=>{return response.json()} )
    .then((json)=>{console.log(json)})


 }
