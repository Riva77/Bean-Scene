import './PrimaryButton.css'

type Props ={
  text: string;
  onClick? : ()=> void;
  size?: 'small' | 'large';
}

const PrimaryButton = ({text , size='large', onClick}:Props) => {
  const buttonSize = size === 'large' ? {width: '134px', height: '48px'} : {width: '100px', height: '48px' }
  return (
    <div style={buttonSize} className="primary-button" onClick={onClick}>{text}</div>
  )
}

export default PrimaryButton