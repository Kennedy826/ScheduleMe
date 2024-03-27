import { Link } from "react-router-dom";

import { headerLogo } from "../assets/images"
import { hamburger } from '../assets/icons'

const NavDash = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="dashboard">
                    <img src={headerLogo}
                        alt='this contains the logo for the nike website'
                        width={130}
                        height={29}
                    />
                </a>
                <ul className="flex justify-center gap-16 items-center max-lg:hidden ">

                    <li>
                        <a href="dashboard" className="font-monserrat leasding-normal text-lg text-slate-gray">Home
                        </a>
                    </li>
                    <li>
                            <a
                                href="insights" className="font-monserrat leasding-normal text-lg text-slate-gray">Insights
                            </a>
                    </li>
                </ul>
                <div className="lg:hidden max-lg:block hidden text-white dark:bg-white"> 
                {/* //i need to change this */}
                    <img src={hamburger}
                        alt="hanburger"
                        width={25}
                        height={25}
                       />
                        {/* <img src={should be ble to access dark mode from here and change the icon of the svg}
                        alt="hanburger"
                        width={25}
                        height={25} */}
                    
                </div>
            </nav>
        </header>
    )
}

export default NavDash