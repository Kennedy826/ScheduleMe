import { useState } from "react"

import Button from "../components/Button"
import { arrowRight } from '../assets/icons'
import { statistics, imgs } from '../constants'
import { img1 } from "../assets/images"

import ShoeCard from "../components/ShoeCard"

const Hero = () => {

  const [img, setImg] = useState(img1)
  const style = {

  }
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    
    >
      {/* -z-1 */}
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 item sm:h[100vh]"  >
        <p className="text-xl font-montserrat text-coral-red"> Your expense Tracker Buddy</p>
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[64px] min-sm:leading-[82] font-bold">
          <span className="xl:bg-white dark:bg-[#171b3f] dark:text-white xl:whitespace-nowrap relative lg:py-1  leading-normal">Effortless tracking,  powerful <br />insights, with </span>
          <span className=" text-coral-red inline-block mt-3">PesaBuddy </span>
          </h1>
          <p className="font-montserat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-slate-100"> Say goodbye to spreadsheets and hello to financial peace of mind <span>LeNkap</span>.</p> 

          <Button label='Get Started' iconURL = {arrowRight} />

          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key= {stat.label}>
                <p className="text-4xl font-palanquin font-bold dark:text-white">{stat.value}</p>
                <p className="leading-7 fontpesabuddy-high-resolution-logo-transparent-montserat text-slate-gray dark:text-white">{stat.label}</p>
              </div>
            ))}
          </div>
      </div>
      {/* -z-1  */}
      <div className="relative flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero  bg-cover bg-center">
         <img src={img} 
         alt="big moeny collection"
         width={610} 
         height={500} 
         className="relative object-contain  "/>

         <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {imgs.map((image) => (
            <div key = {image}>
              <ShoeCard 
              imgURL={image} 
              changeMoneyImage = {(image) =>setImg(image)} 
              img = {img}/>
            </div>
          ))}
          </div>
      </div>
    </section>
  )
}

export default Hero 