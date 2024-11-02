import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
            <header>
                <h1 className="logo">ControPoll<span className="spark">🔥</span></h1>
            </header>
            <main className="content">
                <div className="text-section">
                    <h2>Controversial Polls with an anonymous comment box!</h2>
                    <p>New questions added daily!</p>
                    <a href="#" className="button">Get Started →</a>
                </div>
                <div className="image-section">
                    <img src="images/match-unscreen.gif" alt="Flaming match" className="flame-icon" />
                </div>
            </main>
            <footer>
                <p>
                    Mail us for suggestions at 
                    <a href="mailto:contropollsunlimited@gmail.com"> contropollsunlimited@gmail.com</a>
                </p>
            </footer>
        </div>  
    </>
  )
}

export default App
