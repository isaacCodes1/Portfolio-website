import './Landing.css';
import headerImage from './Images/HeaderImage 1 (1).png'

const Landing = () => {

  const landingText = 'Branding|Image making';

  const bigText = 'Visual Designer';

  const description = 'This is a template Figma file, turned into code using Anima.\nLearn more at AnimaApp.com';



  return (
    // General landing Items
    <div className='gen-landing-container'>
      <div className="landing-texts">
        <p className="first-text">{ landingText }</p>
        <p className="big-text">{ bigText }</p>
        <p className='description'>{ description }</p>
        <button className="contact-button">Contact</button>
      </div>
      <img className='header-image' src= { headerImage } />
    </div>
  )
}

export default Landing