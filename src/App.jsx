import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import FeatureBlock from './components/features'
import OfferList from './components/offerlist'
import Testimonies from './components/testimony'
import NewsLetter from './components/newsletters'
import Footer from './components/Footer'
import bigline from './assets/Vector 2517.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="app">
      <Navbar />
      <Hero />
      <div className='feature-block-wrapper'>
        <FeatureBlock 
          headerLine1="Tomorrow should" 
          headerLine2 ="be better than today"
          text="We are a team of strategists, designers communicators, researchers.
                Togeather, we belive that progress only happens when you refuse
                to play things safe."
          image="https://i.pravatar.cc/500?img=12"
          zigzagtop="40px"
          zigzagleft="10px"
          reverse
        />
        <FeatureBlock
          headerLine1="See how we can" 
          headerLine2="help you progress"
          text="We add a layer of fearless insights and action that allows change
                makers to accelerate their progress in areas such as brand, design
                digital, comms and social research."
          image="https://i.pravatar.cc/500?img=13"
          zigzagtop="90px"
          zigzagleft="210px"
        />
        <img src={bigline} className="big-line2" alt="" />
      </div>
      <OfferList/>
      <Testimonies/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
