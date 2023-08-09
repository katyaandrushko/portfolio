import './topbar.scss'
import { FiUser, FiMail } from "react-icons/fi";
import App from '../../App';

function Topbar({setMenuOpen, menuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && 'active') }>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            I want working.
          </a>
          <div className="itemContainer">
            <FiUser className='icon' />
            <span>+380 66 144 93 19</span>  
          </div>
          <div className="itemContainer">
            <FiMail className='icon'/>
            <span>katyaandrushko14@gmail.com</span>  
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Topbar

