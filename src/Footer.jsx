import './Footer.css'

const Footer = () => {
  const Work = 'Lets work together';
  return (
    <div className='foot-gen'>
      <div className="text-area">
        <p className='work-txt'>{ Work }</p>
        <p className='temp'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into  code using Anima. Learn more at AnimaApp.com</p>
      <div className="socials">
        <img src="/src/assets/discord.png"  />
        <img src="/src/assets/facebook.png"  />
        <img src="/src/assets/dribbble.png"  />
        <img src="/src/assets/nstagram.png"  />
        <img src="/src/assets/behance.png"  />
      </div>
      <p>Copyright &#169;Made by DamiCodez 2024.</p>
      </div>
      <form className='form' action="submit">
        <input className='input' type="text" placeholder='Name'/> <br />
        <input  className='input' type="text" placeholder='Email'/> <br />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  )
}

export default Footer