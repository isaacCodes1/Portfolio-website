import './Cards.css';
import pink from './Images/Skills Card Icon pink.png';
import red from './Images/Skills Card Icon red.png';
import green from './Images/Skills Card Icon green.png';

const Cards = () => {
  return (
    <div className='container'>
      <div className="card1">
        <img src={ pink }  />
        <p className='first-card-text'>Product Design</p>
        <p className='first-small-text'>This is a template Figma file, turned <br />into code using Anima. Learn more at <br />AnimaApp.com</p>
      </div>
      <div className="card2">
        <img src={ red }  />
        <p className="second-card-text">Visual Design</p>
        <p className='first-small-text'>This is a template Figma file, turned <br />into code using Anima. Learn more at <br />AnimaApp.com</p>
      </div>
      <div className="card3">
        <img src={ green }  />
        <p className="third-card-text">Art Direction</p>
        <p className='first-small-text'>This is a template Figma file, turned <br />into code using Anima. Learn more at <br />AnimaApp.com</p>
      </div>
    </div>
  )
}

export default Cards