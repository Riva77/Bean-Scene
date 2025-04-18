import NavButton from "../buttons/NavButton"
import PrimaryButton from "../buttons/PrimaryButton"
import './Navbar.css'


const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className='logo-link' >Bean Scene</div>
    <div className="nav-links">
    
    <NavButton text='Home'/>
    <NavButton text='Menu'/>
    <NavButton text='About Us'/>                
    <NavButton text='Contact Us'/>
    </div>

    <div className="auth-buttons">
      <NavButton text='Sign In'/> 
     <span className="sign-up">
               <PrimaryButton  size="small" text='Sign Up'/>
               </span>
      </div>
    </div>
  )
}

export default Navbar