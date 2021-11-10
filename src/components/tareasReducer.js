
const tareasReducer = ( state, action ) => {

    switch (action.type) {
       case 'agregar':
           return [...state, action.payload];
        case 'eliminar':
            return state.filter(tarea => tarea.id !== action.payload);
        case 'completa':
            return state.map(tarea => 
                (tarea.id === action.payload)
                ? {...tarea, completa:!tarea.completa}
                : tarea
            )
                
        default:
            return state
    }

}

export default tareasReducer