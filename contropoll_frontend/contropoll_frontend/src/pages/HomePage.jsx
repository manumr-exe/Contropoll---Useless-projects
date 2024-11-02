import React from 'react'
import "./homepage.css"
import matchgif from "../assets/match-unscreen.gif"
import { useNavigate } from 'react-router-dom';
function HomePage() {
    const navigate = useNavigate();
    const goToAboutPage = () => {
        navigate('/question'); // Navigate to /about route
      };
    
  return (
    <body>
       <div className="container">
            <header>
                <h1 className="logo">ControPoll<span className="spark">🔥</span></h1>
            </header>
            <main className="content">
                <div className="text-section">
                    <h2>Controversial Polls with a anonymous voting!</h2>
                    <p>New questions added daily!</p>
                    <a href="#" className="button" onClick={goToAboutPage}>Get Started →</a>
                </div>
                <div className="image-section">
                    <img src={matchgif} alt="Flaming match" className="flame-icon" />
                </div>
            </main>
            <footer>
                <p>
                    Mail us for suggestions at 
                    <a href="mailto:contropollsunlimited@gmail.com"> contropollsunlimited@gmail.com</a>
                </p>
            </footer>
        </div>  
</body>
  )
}

export default HomePage
