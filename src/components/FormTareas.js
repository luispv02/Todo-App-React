import React from 'react'
import useForm from '../hooks/useForm'

function FormTareas({dispatch}) {

    const [{tareaRealizar}, leerInput, setValueInput] = useForm({
        tareaRealizar: ''
    });

    const agregarTarea = (e) => {
        e.preventDefault();

        if(tareaRealizar.trim().length <= 0 ) return

        const nuevaTarea = {
            id: new Date().getTime(),
            descripcion: tareaRealizar,
            completa: false,
        }

        const action = {
            type: "agregar",
            payload: nuevaTarea,
        }

        dispatch(action)


        setValueInput({tareaRealizar: ''})
    }

    

    return (
        <>
            <h4 className="mb-3">Agregar Tareas</h4>

            <form
                onSubmit={agregarTarea}
            >
                <input 
                    type="text"
                    className="form-control  my-3"
                    placeholder="Agregar Tarea a Realizar"
                    onChange={leerInput}
                    name="tareaRealizar"
                    value={tareaRealizar}
                />

                <button
                    type="submit"
                    className="btn btn-primary"
                >Agregar</button>
            </form>
        </>
    )
}

export default FormTareas

