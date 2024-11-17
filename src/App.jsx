import './assets/css/styles.css'
import MainNav from './components/MainNav'
import Showcase from './components/Showcase'
import Logos from './components/Logos'
import Features from './components/Features'
import HowDoesItWork from './components/HowDoesItWork'
import InfoSection from './components/InfoSection'
import ClientTestimonials from './components/ClientTestimonials'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import ContactUs from './components/ContactUs'
import StarRating from './components/StarRating'
import Footer from './components/Footer'


function App() {


  return (
    <div className="wrapper">
       <main id="main">
      <MainNav />
      <Showcase />
      <Logos />
      <Features />
      <HowDoesItWork />
      <InfoSection />
      <ClientTestimonials />
      <FAQ />
      <Subscribe />
      <ContactUs />
      <Footer />
      </main>
      </div>
    
  )
}

export default App
