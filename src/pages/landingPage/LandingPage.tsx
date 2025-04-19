
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
import Riva from '../../assets/Riva.png'

import FlavourCard from '../../components/cards/flavoursCard/FlavourCard';
import SpecialityCard from '../../components/cards/specialityCard/SpecialityCard';
import Feedback from '../../components/cards/feedbackCard/feedback';

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

  <div className='heroTwo-lDiv'>
  <span className='heroTwo-title'>Get a chance to have an Amazing morning</span>
  <span className='heroTwo-subtitle'>We are giving you are one time opportunity to experience a better life with coffee.</span>
  <span className='heroTwo-Button'><PrimaryButton text="Order Now"/></span>
  </div>
  <div className='heroTwo-rDiv'>
  <div className='beans-img'></div>
  <div className='cup-img'></div>
 
  </div>

</section>

<section className='feedback'>
<div className='feedback-div'>
    <span className='feedback-title'>Our coffee perfection feedback </span>
    <div className='feedback-splash1'>

    </div>
    <span className='feedback-subtitle'>Our customers has amazing things to say about us</span>
    <div className='feedbackCard-div'>
    <Feedback
    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset....."
    name="Riva Karki"
    designation="Senior Developer"
    img={Riva}
    />
    </div>
    <div className='feedback-splash2'>

</div>

  
</div>

</section>
<section className='subscribe'>
  <div className='subscribe-div'>
  <span className='subscribe-title'>Subscribe to get the Latest News</span>
    <span className='subscribe-subtitle'>Don’t miss out on our latest news, updates, tips and special offers</span>
    <div>
      <form className="subscribe-form">
      <input 
    type="email" 
    placeholder="Enter your email" 
    className="email-input" 
    required 
  />
  <button type="submit" className="submit-button">Subscribe</button>

      </form>
    </div>
  </div>
</section>

{/* <section className='footer'>
  

</section> */}


</div>
    
  )
}

export default LandingPage;


