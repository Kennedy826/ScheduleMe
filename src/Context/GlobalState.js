import React, { createContext, useReducer} from "react";
import AppReducer from "./AppReducer";


// initial state

const initialState =  {
  transactions: [
    // {id: 1, text: 'Hello', amount:-300},
    // {id: 2, text: 'camera', amount:300},
    // {id: 3, text: 'shoes', amount:-50},
    // {id: 4, text: 'phoen', amount:100}
  ]
}


//createContext

export const GlobalContext = createContext(initialState);

//provider compnent

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //Actions

function deleteTransaction(id){
  dispatch ({
    type: 'DELETE_TRANSACTION',
    payload: id
  })
}

function addTransaction(transaction) {
  dispatch({
    type: 'ADD_TRANSACTION',
    payload:transaction
  })
}

  return (<GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
    {children}
  </GlobalContext.Provider>)
}

