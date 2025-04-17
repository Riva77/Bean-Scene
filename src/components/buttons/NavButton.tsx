import './NavButton.css'

type Props ={
    text: string;
    onClick?: ()=> void;
}

const NavButton = ({text,onClick}:Props) => {
  return (
    <div className='nav' onClick={onClick}>{text}</div>
  )
}

export default NavButton