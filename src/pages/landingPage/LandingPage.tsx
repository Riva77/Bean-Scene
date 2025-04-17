
import PrimaryButton from '../../components/buttons/PrimaryButton';
import Navbar from '../../components/Nav/Navbar';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className='overlay'>
    <Navbar/>
    <div className='bg-div'>
    <h1 className='title'>We’ve got your morning covered with</h1>
    <h1 className='sub-title'>Coffee</h1>
    <p className='description'>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
    <span className='button'><PrimaryButton text='Order Now'/></span>
    
    
    
</div>
</div>
    
  )
}

export default LandingPage;