import PrimaryButton from "../../buttons/PrimaryButton"
import './flavourCard.css'


type Props ={
img: string,
name: string,
contains: string,
rate: string,
onClick? : ()=> void,

}

const FlavourCard = ({img ,name ,contains ,rate ,onClick}:Props) => {
  return (
    <div className="box" onClick={onClick}>
        <img className="img" src={img}/>
        <div className="details">
        <span className="name">{name}</span>
        <span className="contains">{contains}</span>
        <span className="rate">{rate}</span>
        </div>
  
        <span className="button"><PrimaryButton text="Order Now"/>
        </span>
    </div>
  )
}

export default FlavourCard;