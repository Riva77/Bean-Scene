import './SpecialityCard.css'

type Props = {
    icon: string,
    name: string,
    details: string,

}

const SpecialityCard = ({icon, name, details}:Props) => {
  return (
    <div className="speciality">
        <div className='img-div'>
        <img className='image' src={icon}/>
        </div>
  <div className='speciality-contains'>
  <span className="coffee-name">{name}</span>
  <span className="coffee-details">{details}</span>
  </div>

    </div>
  )
}

export default SpecialityCard