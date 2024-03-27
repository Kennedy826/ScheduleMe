import { useContext, useEffect, useState, } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
// import SignUp from './SignUp'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Head from '../components/Head';

import {bg2, icon  } from "../assets/pesa";
import { Footer } from '../sections';

const Login = () => {

  const { isLoginLoading,
    loginError,
    loginInfo,
    updateLoginInfo,
    loginUser} = useContext(AuthContext)
      // State to track if login error has been displayed
    const [errorDisplayed, setErrorDisplayed] = useState(false);

    useEffect(() => {
      // Display error toast if loginError exists and hasn't been displayed yet
      if (loginError?.error && !errorDisplayed) {
        toast.error(loginError.message);
        setErrorDisplayed(true); // Set errorDisplayed to true after displaying error
      }
    }, [loginError, errorDisplayed]);



  return (

    <div className='text-white flex-col flex justify-center items-center bg-red-400 dark:dark:bg-[#171b3f] bg-cover' 
  style={{ "backgroundImage": `url({bg2})` }}>
    <Head/>
      <div className='bg-slate-800 mt-20 lg:mt-32 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-md bg-opacity-60 relative'>

        <img className="border-slate-400 my-4 py-4" width={100} height={100} src={icon} alt="logo image" />

        <h1 className='text-4xl text-left font-bold text-white mb-6'>Welcome back friend! </h1>

        <form onSubmit={loginUser}>

          <div className='relative my-4 ' >
            <label htmlFor="">Email</label>
            <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' 
            onChange={(e) => updateLoginInfo({...loginInfo, email: e.target.value})}
            />
          </div>

          <div className='relative my-4'>
            <label htmlFor="">Password</label>
            <input type="password" className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer'
                        onChange={(e) => updateLoginInfo({...loginInfo, password: e.target.value})}

            />
            {/* <label className='absolute text-sm  text-white duration-300 transform-y-6  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-950 peer-focus:dark:text-blue-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' htmlFor="password">Your Password</label> */}
          </div>

          <div className='flex justify-between items-center'>
            <div className=' flex gap-2 items-center '>
              <input type="checkbox" name='' id='' />
              <label htmlFor="">Remember me</label>
            </div>
            {/* <Link className='text-red-400'>Forgot password?</Link> */}
            <a className='text-red-400 hover:text-slate-200' href='' >Forgot password?</a>
          </div>
{/* //this need to be chnaged once the login is also use like i need to link it with the api same for signup */}

          <Link to='/dashboard'>
          <button type='submit' className="flex justify-center items-center py-4 px-4 font-monserrat text-[18px] leading-none rounded-full bg-white text-red-400 w-full  my-6 mr-4 hover:bg-red-400 hover:text-white duration-300 transition-colors" 
          
          >{isLoginLoading ? "Loggin you in..." : "Login"}</button>
          </Link>
          

          <div className='text-center'>
            <span className='m-4'>Don't yet have an account? </span>
            <Link to="/signup" className='text-red-400 hover:text-slate-200'> SignUp.</Link>
          </div>

        </form>

       

      </div>
     
    
     <section className="padding-x padding-t mt-10 w-full pb-8 bg-black dark:bg-[rgb(23,27,63)]">
     <Footer />
   </section>
   </div>
  )
}

export default Login