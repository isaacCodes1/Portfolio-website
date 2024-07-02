import './Brands.css'
import google from './Images/google logo.png';
import nike from './Images/Nike logo.png';
import samsung from './Images/Samsung logo.png';
import apple from './Images/Apple logo.png';
import adidas from './Images/Adidas logo.png';

const Brands = () => {
  return (
    <div className='brands-image'>
        <img src={ google } />
        <img src={ nike }  />
        <img src={ samsung }  />
        <img src={ apple }  />
        <img src={ adidas }  />
    </div>
  )
}

export default Brands