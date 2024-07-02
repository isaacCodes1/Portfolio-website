import './Cards.css'

const Cards = () => {
  return (
    <div className='container'>
      <div className="card1">
        <img src="/src/assets/Skills Card Icon pink.svg"  />
        <p className='first-card-text'>Product Design</p>
        <p className='first-small-text'>This is a template Figma file, turned <br />into code using Anima. Learn more at <br />AnimaApp.com</p>
      </div>
      <div className="card2">
        <img src="/src/assets/Skills Card Icon red.svg"  />
        <p className="second-card-text">Visual Design</p>
        <p className='first-small-text'>This is a template Figma file, turned <br />into code using Anima. Learn more at <br />AnimaApp.com</p>
      </div>
      <div className="card3">
        <img src="/src/assets/Skills Card Icon green.svg"  />
        <p className="third-card-text">Art Direction</p>
        <p className='first-small-text'>This is a template Figma file, turned <br />into code using Anima. Learn more at <br />AnimaApp.com</p>
      </div>
    </div>
  )
}

export default Cards