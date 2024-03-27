import { Link } from "react-router-dom"

const Button = ({ label, iconURL }) => {
  return (
    <Link to={'/signup'}>
      <button className="flex justify-center items-center gap-2 py-5 px-7 font-monserrat border dark:border-none text-lg leading-none rounded-full bg-coral-red text-white" >
        {label}
        <img src={iconURL} alt="arrow key" className="ml-2 rounded-full w-5 h-5 " />
      </button>
    </Link>

  )
}

export default Button