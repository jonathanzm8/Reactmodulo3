let grades=[{materia:'Matematica', nota: 9.5},{materia:'literatura', nota: 8}]

 export let guardar=(txt)=>{

    grades.push(txt)

    console.log(grades)
}

 export let getGrades=()=>{

    return grades;

}

export const Actualizar=(ingreso)=>{
    let recuperado = find(ingreso.materia);
   
    if(recuperado!=null){
        recuperado.nota= ingreso.nota
    }

    console.log("errrreglo", grades)

}

const find=(suject)=>{

    for(let i=0; i<grades.length; i++){
        if(grades[i].materia==suject){
            return grades[i];

        }
    }
    return null;
}