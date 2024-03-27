import Nav from "../components/Nav"
import Footer from "../sections/Footer"
import Head from "../components/Head"

import { Link } from "react-router-dom"
//import { icon } from "../assets/pesa"
import { contact } from "../assets/images"

const ContactUs = () => {
  return (
    <div >
      <Head />
      <section className="dark:dark:bg-[#171b3f] z-[-1]">
        <div className="h-[100vh]">
          <div id="signUP" className='text-white  lg:mt-0 flex flex-col justify-center items-center dark:dark:bg-[#171b3f] bg-cover' style={{ "backgroundImage": "url('../src/assets/pesa/bg2.jpg')" }}>

            <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-md z-[-1] bg-opacity-60  my-36 flex flex-col justify-center items-center lg:w-[70%]'>
              <div>
              {/* <img className="border-slate-400 my-3 py-3" width={80} height={80} src={icon} alt="logo image" /> */}
              <h1 className='text-4xl text-left font-bold text-white mb-6'>Please fill in the form</h1>
              </div>
              
              <div className="lg:flex justify-center w-[80%] gap-2 items-center">
                <div className="">
                <img src={contact} alt="contact us" 
                />
                <p className="text-1xl font-erif font-bold"><span className="text-coral-red">Email</span> customer@pesa.com</p>
                <p className="text-1xl font-erif font-bold"><span className="text-coral-red">Tel</span> +237650028614</p>
                </div>
                
                <form className="w-full">

                  <div className='relative my-4 ' >
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent  border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' />
                  </div>

                  <div className='relative my-4 ' >
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder='' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-b-2 border-0 border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer' />

                  </div>

                  <div className='relative my-4 ' >
                    <label htmlFor="">What should we know?</label>
                    <textarea type="telephone" cols="10" rows="5" placeholder='message' className='block py-3  w-full px-3 text-sm text-white bg-transparent border-2  border-red-400 appearance-none dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer'> </textarea>
                  </div>



                  <Link to='/dashboard'>
                    <button type='submit' className="flex justify-center items-center py-4 px-4 font-monserrat text-[18px] leading-none rounded-full bg-white text-red-400 w-full  my-6 mr-4 hover:bg-red-400 hover:text-white duration-300 transition-colors"

                    >
                      Submit
                    </button>
                  </Link>

                </form>
              </div>



            </div>

          </div>
        </div>
      </section>
      <section className="padding-x py-[350px] lg:py-0  pb-8 bg-black dark:bg-[rgb(23,27,63)] botom-0">
        <Footer />
      </section>
    </div>
  )
}

export default ContactUs