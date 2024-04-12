import { useEffect, useState } from 'react'
import './App.css'
import divider from "./assets/divider.svg"
import dividerMobile from "./assets/divider-mobile.svg"
import dice from "./assets/dice.svg"
import axios from "axios"


function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState({})
  const API = "https://api.adviceslip.com/advice"

  const getQuote = async () => {
    try {
      setIsLoading(true)
      const {data} = await axios(API)
      setQuote(data.slip)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  return (
    <div>
      
      <div className="container">
        <p className="advice-id">Advice # {quote?.id}</p>
        <p className="quote"><span>&ldquo;</span> {quote?.advice} <span>&rdquo;</span></p>
        <img className="divider" src={divider} alt="" />
        <img className="divider-mobile" src={dividerMobile} alt="" />
        <button className="dice-wrapper" onClick={() => getQuote()}>
          
          <img className={isLoading ? "loading" : null} src={dice} alt="" />
        </button>
      </div>

    </div>
  )
}

export default App
