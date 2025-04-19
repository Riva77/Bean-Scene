 import "./Feedback.css"

type Props={
    text: string,
    name: string,
    designation: string,
    img:string,
    onClick?: ()=> void,
}


const Feedback = ({text,name,designation,img,onClick}:Props) => {
  return (
    <div className='feedback-card' onClick={onClick}>
        <div className="comma-div">      
              <span className="comma">“</span>
              </div>

        <p className="feedback-text">{text}</p>
        <span className="feedback-name">{name}</span>
        <span className="feedback-designation">{designation}</span>
    
        <img className="feedback-img" src={img}/>
      
    </div>
  )
}

export default Feedback