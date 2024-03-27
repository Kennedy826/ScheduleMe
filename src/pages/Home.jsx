import { Hero, Reviews, Functionalities,  ContactUs, Footer, GetStarted } from "../sections"
import Nav from "../components/Nav"
import Head from "../components/Head"

function Home() {

  return ( 
    <main className="relative dark:bg-[rgb(23,27,63)] dark:text-white">
      <div className="z-10">
      <Head />
      </div>
        

        <section className="xl:padding-l wide:padding-r -z-1 padding-b"
        id="home"
        >
          <Hero />
        </section>

        <section className="padding" id="functionalities">
          <Functionalities />
        </section>
        
        <section className="padding bg-pale-blue dark:bg-[rgb(23,27,63)]" id="reviews">
          <Reviews />
        </section>

        <section className="padding-x sm:py-20 py-10 w-full">
          <GetStarted />
        </section> 

        <section className="padding-x padding-t pb-8 bg-black dark:bg-[rgb(23,27,63)]">
          <Footer />
        </section>
    </main>
  )
}  

export default Home
 