import './App.css'
import { Footer } from './components/footer/Footer'
import { Footer1 } from './components/footer1/Footer1'
import { Header } from './components/header/Header'
import { Section1 } from './components/section1/Section1'
import { Section2 } from './components/section2/section2'
import { Section3 } from './components/section3/Section3'
import { Section4 } from './components/section4/Section4'
// import { Section5 } from './components/section5/Section5'
import { Section6 } from './components/section6/Section6'

function App() {
  return (
    <div className="container">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      {/* <Section5 />  */}
      <Section6 />
      <Footer />
      <Footer1 />
    </div>
  )
}

export default App
