import React, { useContext } from 'react';

// we can rename imports using as
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from "./Context/AuthContext"



import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Insight from './pages/Insight';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs.jsx';;




const Router = () => {
  const { user } = useContext(AuthContext)

  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about-us' element={<AboutUs/>} />
      <Route path='contact-us' element={<ContactUs/>} />

      <Route path= '/signup' element={user ? <Navigate to="/dashboard" /> : <SignUp />} />
      <Route path='/login' element={user ? <Navigate to="/dashboard" />  : <Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/insights' element={<Insight />}/>
      {/* <Route path='deleteitem' element={user ? <DeletePop/>  : <Dashboard/> }/> */}
    </Routes>



  )
}

export default Router























// const Router = () => {


// return (
//       

//           <Routes>
//               {/* <Route path='/' element={<Home/>} /> */}
//               <Route path='/signup' element={ user ? <Dashboard/> : <SignUp/>} />
//               <Route path='/login' element={ user ? <Dashboard/> :<Login/>} />
//               {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
//               <Route path='insights' element={user ? <Insight/> : <Dashboard/>}/>
//               <Route path='deleteitem' element={user ? <DeletePop/>  : <Dashboard/> }/>
//           </Routes>
//       </BrowserRouter>
// )
// }


// <Route path='/' element={<Home/>} />
// <Route path='/signup' element={ user ? <Dashboard/> : <SignUp/>} />
// <Route path='/login' element={ user ? <Dashboard/> :<Login/>} />
// {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
// <Route path='insights' element={ <Insight/> }/>
// <Route path='deleteitem' element={<DeletePop/> }/>
