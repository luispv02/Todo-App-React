import { useEffect, useReducer } from "react";
import ContenedorTareas from "./components/ContenedorTareas";
import FormTareas from "./components/FormTareas";
import tareasReducer from "./components/tareasReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('tareas')) || [];
}

function TodoApp() {

  const [tareas, dispatch] = useReducer(tareasReducer, [], init);

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas])

  console.log(tareas.length)

  return (
    <>
      <h1 className="text-center py-3 mt-md-3 mb-md-5">Administrador de Tareas</h1>

      <div className="container">
        <div className="row px-3">
          <div className={`col-12 ${tareas.length === 0 ? 'col-md-8 m-auto' : 'col-md-5'}`}>
            <FormTareas 
              dispatch={dispatch}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-6 mt-5 m-md-0 contenedor-tareas">
            {tareas.length !== 0 &&
              <ContenedorTareas 
                tareas={tareas}
                dispatch={dispatch}
              />
             }
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
