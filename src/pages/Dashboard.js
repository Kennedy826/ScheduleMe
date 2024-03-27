import React, {Fragment} from 'react'
import Header from '../components/Header'
import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import TransactionList from '../components/TransactionList'
import '../App.css'
import AddTransaction from '../components/AddTransaction'
import { GlobalProvider } from '../Context/GlobalState'
//import add from '../assets/icons/add.svg'

const Dashboard = () => {

 

  return (
    <GlobalProvider>
      <Header />
      <div >

        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />

        {/* <Fragment>

          <button className='bg-red-400 rounded-lg p-4 mb-3 flex justify-center items-center'
            // onClick={() => { setShowModal(true) }}
          >
            <img src='./' alt="icon to add transactions" className='lg:w-[60px]' width={40} />
            <p className='text-white p-1 font-bold' > Create</p>
          </button>


        </Fragment> */}

        <p className='text-white w-full p-4 text-center bg-red-400'>Hello <span>Weno</span></p>

      </div>
    </GlobalProvider>


  )
}

export default Dashboard