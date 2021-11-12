

function ItemTarea({tarea, index, dispatch}) {

    const eliminarTarea = (id) => {
        const action = {
            type: 'eliminar',
            payload: id,
        }
        dispatch(action)
    }

    const tareaCompleta = (id, e) => {

        console.log(e.target.checked)

        if(e.target.checked){
            const action = {
                type: 'completa',
                payload: id,
            }
            dispatch(action)
        }else{
            const action = {
                type: 'completa',
                payload: id,
            }
            dispatch(action)
        }
    }
   
    return (
        <ul className="list-group">
            <li
                className={`list-group-item d-flex align-items-center py-2 ${tarea.completa ? 'complete' : null} `}
            >
                <input 
                    type="checkbox"
                    onChange={(e) => tareaCompleta(tarea.id, e)}
                    checked={tarea.completa}
                    
                />
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
