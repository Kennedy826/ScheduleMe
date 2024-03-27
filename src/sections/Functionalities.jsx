import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Functionalities = () => {
  return (
    <section className="max-container">
      <h2 className="font-bold text-[50px] text-center font-palanquin leading-normal py-4">Our <span className="text-coral-red">Services</span> </h2>
      <div className="flex justify-center flex-wrap gap-9">
      {services.map((service) => (
      <ServiceCard key={service.label} {...service} />
    ))}
      </div>
      
    </section>
  )
}

export default Functionalities