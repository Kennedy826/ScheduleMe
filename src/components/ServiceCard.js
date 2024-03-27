const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className='flex-1 w-full sm:w-[350px] sm:min-w-[350px] rounded-[20px] 
   shadow-2xl dark:shadow-black px-10 py-16'>
    <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={imgURL} alt={label} width={24} height={24}/>
    </div>
    <h3   className='mt-5 leading-normal font-palanquin font-bold text-3xl'>{label}</h3>
    <p className='mt-3 break-words font-montserrat text-lg leading-normal dark:text-slate-300'>{subtext}</p>
   </div>
  )
}

export default ServiceCard