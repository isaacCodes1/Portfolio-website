import './Latest.css';
import orange from './Images/Blood Orage image.png';
import drink from './Images/Abstract drink image.png';
import paper from './Images/Paper image.png';

const Latest = () => {
  return (
    <div className='grid-container'>
      <div className="grid1">
        <img src={ orange }  />
        <p className='pro-title'>Project Title</p>
        <p className="descrypt">UI, Art Direction</p>
      </div>
      <div className="grid2">
        <img src={ drink }  />
        <p className="pro-title">Project Title</p>
        <p className="descrypt">UI, Art Direction</p>
      </div>
      <div className="grid3"> 
        <img src={ paper }  />
        <p className="pro-title">Project Title</p>
        <p className="descrypt">UI, Art Direction</p>
      </div>
    </div>
  )
}

export default Latest