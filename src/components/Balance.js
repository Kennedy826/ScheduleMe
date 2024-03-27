import React, { useContext } from 'react'

import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc +=item), 0).toFixed(1)

    return (
        <div className=' text-black flex  flex-col items-center bg-slate-200  dark:text-white  dark:bg-[#0d0c27] shadow-md bg-opacity-70 font-palaquin lg:w-full mt-20 lg:mt-0 lg:p-10'
        >
            <div className="relative rounded-md  p-6 w-full lg:w-[85%] bg-white dark:bg-[#171b3f] shadow-md mt-20  mx-4 lg:mx-20">

                <div className='border-red-400 border-2 p-4 mb-8 flex flex-col w-full '>
                    <p className='text-3xl font-palaquin font-extrabold ' >Total Balance</p>
                    <div>
                        <span className='text-red-500 text-[20px] font-bold font-mono'>{total}</span> <span className='text-3xl text-blue-950 dark:text-white'>Frs</span>
                    </div>
                </div>
                </div>
               
            </div>
            )
}

            export default Balance