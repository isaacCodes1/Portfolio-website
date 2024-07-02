import './Testimonials.css';
import img1 from './Images/Client Image.png';
import stars from './Images/Stars (3).png';

const Testimoials = () => {
  return (
    <div className='mother-cont'>
      <p className='Test-txt'>Testimonials</p>
      <div className="grids">
      <div className="rating">
        <div className="des">
          <p>This is a template Figma file, turned into code using Anima. learn more at AnimaApp.com</p>
        </div>
        <div className="user">
          <img className='image' src={ img1 }  />
          <div className="stars">
            <img src={ stars }  />
            <p className='User-name'>Gemma Nolen</p>
            <p className='google'>Google</p>
          </div>
        </div>
      </div>
      <div className="rating">
      <div className="des">
          <p>This is a template Figma file, turned into code using Anima. learn more at AnimaApp.com</p>
        </div>
        <div className="user">
        <img className='image' src={ img1 }  />
          <div className="stars">
          <img src={ stars }  />
            <p className='User-name'>Gemma Nolen</p>
            <p className='google'>Google</p>
          </div>
        </div>
      </div>
      <div className="rating">
      <div className="des">
          <p>This is a template Figma file, turned into code using Anima. learn more at AnimaApp.com</p>
        </div>
        <div className="user">
        <img className='image' src={ img1 }  />
          <div className="stars">
          <img src={ stars }  />
            <p className='User-name'>Gemma Nolen</p>
            <p className='google'>Google</p>
          </div>
        </div>
      </div>
      <div className="rating">
      <div className="des">
          <p>This is a template Figma file, turned into code using Anima. learn more at AnimaApp.com</p>
        </div>
        <div className="user">
        <img className='image' src={ img1 }  />
          <div className="stars">
          <img src={ stars }  />
            <p className='User-name'>Gemma Nolen</p>
            <p className='google'>Google</p>
          </div>
        </div>
      </div>
      <div className="rating">
      <div className="des">
          <p>This is a template Figma file, turned into code using Anima. learn more at AnimaApp.com</p>
        </div>
        <div className="user">
        <img className='image' src={ img1 }  />
          <div className="stars">
          <img src={ stars }  />
            <p className='User-name'>Gemma Nolen</p>
            <p className='google'>Google</p>
          </div>
        </div>
      </div>
      <div className="rating">
      <div className="des">
          <p>This is a template Figma file, turned into code using Anima. learn more at AnimaApp.com</p>
        </div>
        <div className="user">
        <img className='image' src={ img1 }  />
          <div className="stars">
          <img src={ stars }  />
            <p className='User-name'>Gemma Nolen</p>
            <p className='google'>Google</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimoials