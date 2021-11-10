import React from 'react'

function ItemTarea({tarea, index, dispatch}) {

    const eliminarTarea = (id) => {
        const action = {
            type: 'eliminar',
            payload: id,
        }

        dispatch(action)
    }

    const tareaCompleta = (id) => {

    
        const action = {
            type: 'completa',
            payload: id,
        }

        dispatch(action)
    }

    return (
        <ul className="list-group">
            <li 
                className={`list-group-item d-flex align-items-center py-2 ${tarea.completa ? 'complete' : null} `}
                onClick={() => tareaCompleta(tarea.id)}>
                {/* <input 
                    type="checkbox"
                    name="complete"
                    onClick={() => tareaCompleta(tarea.id)}
                /> */}
                <p className="m-0 cursor-pointer"><span className="fw-bold">{index + 1}. </span>{tarea.descripcion}</p>
                <button
                    onClick={() => eliminarTarea(tarea.id)}
                    className="btn btn-danger px-1 py-0"
                >X</button>
            </li>
        </ul>
    )
}

export default ItemTarea
