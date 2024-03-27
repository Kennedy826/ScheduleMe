import { copyrightSign } from "../assets/icons"
import { pesaLogo } from "../assets/pesa"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className=" flex flex-col items-start mt-8">
          <a href="/">
            <img src={pesaLogo}
              width={150}
              height={60}
              alt="logo for footer" />
          </a>
          <p className="text-white-400 mt-6 dark:info-text font-montserrat sm:max-w-sm leading-7 text-base">
            Join thousands who are already managing their finances effectively with <span className="text-coral-red">PesaBuddy</span>
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full ">
                <img 
                src={icon.src} 
                alt={icon.alt}
                  width={24}
                  height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-8">
            {footerLinks.map((section) => (
              <div key={section}>
                <h5 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h5>
                <ul>
                  {section.links.map((link) =>
                  (<li className="text-white-400 mt-2 text-base leading-normal hover:text-slate-gray cursor-pointer " key={link.name}>
                    
                    <a href={link.link}>{link.name}</a>
                  </li>))}
                </ul>
              </div>
            ))}
          </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:item-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt= "copy right sign" 
          width={20}
          height={20}
          className="rounded-full m-0"/>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-monserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer