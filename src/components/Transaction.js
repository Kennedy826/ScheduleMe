import React, { useContext } from 'react'

import { GlobalContext } from '../Context/GlobalState'

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <div className='text-black dark:text-white'>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                {transaction.text} <span >{sign}{Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'> X</button>
            </li>
        </div>

    )
}

export default Transaction