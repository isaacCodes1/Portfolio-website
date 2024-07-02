import './Latest.css';
import isaiah from './Images/Isaiah image.png';
import mexico from './Images/mexico image.png';
import get from './Images/Get A job image.png';

const LatestTwo = () => {
  return (
    <div className="cards-two">
    <div className="grid4">
      <img src={ isaiah }  />
      <p className="pro-title">Project Title</p>
      <p className="descrypt">UI, Art Direction</p>
    </div>
    <div className="grid5">
      <img src={ mexico }  />
      <p className="pro-title">Project Title</p>
      <p className="descrypt">UI, Art Direction</p>
    </div>
    <div className="grid6">
      <img src={ get }  />
      <p className="pro-title">Project Title</p>
      <p className="descrypt">UI, Art Direction</p>
    </div>
  </div>
  )
}

export default LatestTwo