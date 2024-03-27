import React from 'react'
import { useState, useContext } from 'react' 

import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)
    const onSubmit = e => {
    e.preventDefault();

    const newTransaction ={
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

    return (

            <div className="text-black flex  flex-col items-center bg-slate-200  dark:text-white  dark:bg-[#0d0c27] shadow-md bg-opacity-70 font-palaquin lg:w-full  lg:p-10">

                <div className="relative rounded-md  p-6 w-full lg:w-[85%] bg-white dark:bg-[#171b3f] shadow-md  mb-2 mx-4 lg:mx-20">
                  <h3 className='text-red-400 font-serif text-[35px]'> Add new transaction</h3>
                  <form onSubmit={onSubmit}>
                    <div className='form-control'> 
                        <label htmlFor="text">Text</label>
                        <input placeholder='input text' type='text' value={text} className="block bg-transparent border-b-2  border-black-950 w-full p-2 dark:text-white text-[#0f162c] text-sm my-4 apearance-none dark:focus:text-white focus:text-[#0f162c] focus:ring-0 focus:border-blue-950 dark:focus:border-white focus:outline-none peer" onChange={e => setText(e.target.value)}/>
                    </div>
                    <div className='form-control'> 
                        <label htmlFor="amount">Amount</label>
                        <p className='text-red-400'> negaive - expense, positive - income</p>
                        <input placeholder='input amount' type='number' className='block bg-transparent border-b-2 dark:border-red-400 border-black-950 w-full p-2 dark:text-white text-[#0f162c] text-sm my-4 apearance-none dark:focus:text-white focus:text-[#0f162c] focus:ring-0 focus:border-blue-950 dark:focus:border-white focus:outline-none peer' value={amount} onChange={e => setAmount(e.target.value)}/>
                    </div>
                    <div className='flex items-center justify-center'>
                    <button className='btn bg-red-400 fon-serif rounded-md'>Add Transaction</button>
                    </div>
                    
                  </form>

                    </div>
                </div>
          
            )
}

            export default AddTransaction