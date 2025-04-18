
import PrimaryButton from '../../components/buttons/PrimaryButton';

import Navbar from '../../components/Nav/Navbar';
import './LandingPage.css';
import cappuccino from '../../assets/cappuccino.png';
import chaiLatte from '../../assets/chaiLatte.png'
import espresso from '../../assets/espresso.png'
import macchiato from '../../assets/macchiato.png'
import beansIcon from '../../assets/beansIcon.png'
import badgeIcon from '../../assets/badgeIcon.png'
import cupIcon from '../../assets/cupIcon.png'
import priceIcon from '../../assets/priceIcon.png'
import FlavourCard from '../../components/cards/flavoursCard/FlavourCard';
import SpecialityCard from '../../components/cards/specialityCard/SpecialityCard';

const LandingPage = () => {
  return (
    <div >
    <section className='hero'>
    <Navbar/>
    <div className='hero-div'>
    <h1 className='hero-title'>We’ve got your morning covered with</h1>
    <h1 className='hero-subtitle'>Coffee</h1>
    <p className='hero-description'>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
    <span><PrimaryButton text='Order Now'/></span>
    
    
</div>
</section>
<section className='discover'>
  <div className='discover-div'>
  <div className='left-div'>
    <h1 className='discover-title'>Discover the best coffee</h1>
    <p className='discover-description'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
    <span><PrimaryButton text="Learn More"/></span>

   
  </div>
  <div className='right-div'> </div>
  
  </div>
  <div
   className='splash'></div>
</section>
<section className='flavours'>
  <div className='flavours-div'>
  <span className='flavours-title'>Enjoy a new blend of coffee style</span>
  <span className='flavours-subtitle'>Explore all flavours of coffee with us. There is always a new cup worth experiencing</span>
  <div className='flavours-types'>
  <FlavourCard
        img={cappuccino}
        name="Cappuccino"
        contains="Espresso, Chocolate, Milk"
        rate="$8.99"
        onClick={() => console.log('Card clicked')}
      />
      <FlavourCard
        img={chaiLatte}
        name="Chai Latte"
        contains="Espresso, Chocolate, Milk"
        rate="$7.99"
        onClick={() => console.log('Card clicked')}
      />
      <FlavourCard
        img={macchiato}
        name="Macchiato"
        contains="Espresso, Chocolate, Milk"
        rate="$6.99"
        onClick={() => console.log('Card clicked')}
      />
      <FlavourCard
        img={espresso}
        name="Espresso"
        contains="Espresso, Chocolate, Milk"
        rate="$5.99"
        onClick={() => console.log('Card clicked')}
      />
  </div>
  {/* <span
   className='splash-right'></span> */}

  </div>

</section>
<section className='whyus'>
  <div className='whyus-div'>
  <span className='whyus-title'>Why are we different?</span>
  <span className='whyus-subtitle'>We don’t just make your coffee, we make your day!</span>
  <div className='whyus-speciality'>  
  <SpecialityCard 
  icon={beansIcon}
  name='Supreme Beans'
  details='Beans that provides great taste'
 
  /><SpecialityCard 
  icon={badgeIcon}
  name='High Quality'
  details='We provide the highest quality'
 
  />
  <SpecialityCard 
  icon={cupIcon}
  name='Extraordinary'
  details='Coffee like you have never tasted'
 
  />
  <SpecialityCard 
  icon={priceIcon}
  name='Affordable Price'
  details='Our Coffee prices are easy to afford'
 
  />
  </div>
  <span className='whyus-quote'>Great ideas start with great coffee, Lets help you achieve that</span>
  <span className='whyus-statement'>Get started today.</span>
  <span className='join-us'><PrimaryButton text='Join Us'/></span>

  </div>

</section>
<section className='heroTwo'> 
  <div className='heroTwo-rDiv'>
    
  </div>
  <div className='heroTwo-lDiv'></div>
</section>



</div>
    
  )
}

export default LandingPage;


