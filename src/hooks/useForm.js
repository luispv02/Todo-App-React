import { useState } from "react"


function useForm(initialState) {
 
    const [valueInput, setValueInput] = useState(initialState)

    const leerInput = (e) => {
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value
        })
    }


    return [valueInput, leerInput, setValueInput]
    
    

}

export default useForm
