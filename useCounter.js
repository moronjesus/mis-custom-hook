import {useState} from 'react'

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState( initialState ); //10


    //contador con factor que pasa por parametro 

   /*  const increment = ( factor = 1) =>{
        setCounter(state + factor)

    }

    const decrement = (factor = 1) =>{
        setCounter(state - factor)

    } */


    const increment = () =>{
        setCounter(counter + 1)

    }

    const decrement = () =>{
        setCounter(counter - 1)

    }

    const reset =() =>{
        setCounter(initialState)

    }

    return{
        counter,
        increment,
        decrement,
        reset
    }
}
