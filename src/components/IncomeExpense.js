import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


const IncomeExpense = () => {
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(1);
    const expense =  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0);

    return (

        <div className="text-black flex  flex-col items-center bg-slate-200  dark:text-white  dark:bg-[#0d0c27] shadow-md bg-opacity-70 font-palaquin lg:w-full  lg:p-10">

            <div className="relative rounded-md  p-6 w-full lg:w-[85%] bg-white dark:bg-[#171b3f] shadow-md mx-4 lg:mx-20">
                <div className='flex justify-between items-center gap-4 w-full '>

                    <div className='border-red-400 shadow-md border-2 w-full p-3 flex flex-col '>
                        <p className='lg:text-3xl text-1xl font-normal font-palaquin lg:font-extrabold text-red-700'>Total Expenditure</p>
                        <div>
                            <span className='lg:text-[20px] font-bold '>{expense}</span> <span className='lg:text-3xl text-1xl font-normal text-blue-950 dark:text-white'>Frs</span>
                        </div>
                    </div>

                    <div className='border-red-400 shadow-md w-full border-2 p-3 flex  flex-col '>
                        <p className='lg:text-3xl text-1xl font-normal font-palaquin lg:font-extrabold text-green-300'>Total savings</p>
                        <div>
                            <span className=' lg:text-[20px] font-bold '>{income}</span> <span className='lg:text-3xl text-1xl dark:text-white '>Frs</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default IncomeExpense