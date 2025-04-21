import React from 'react'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/AboutUs'
import Services from '../../components/Services/Services'
import Contact from '../../components/Contact/Contact'



type Props = {}

const Home = (props: Props) => {
  return (
   <div>
     <Hero />
     
     <Services/>
     <Contact/>

   </div>
  )
}

export default Home