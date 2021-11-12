import React from 'react'
import ItemTarea from './ItemTarea'


function ContenedorTareas({tareas, dispatch}) {

  console.log(tareas)
    
    return (
        <>
            <h4>Tareas a Realizar</h4>

            {tareas.map((tarea, index) => (
                <ItemTarea 
                    key={tarea.id}
                    tarea={tarea}
                    index={index}
                    dispatch={dispatch}
                />
            ))}
        </>
    )
}

export default ContenedorTareas

