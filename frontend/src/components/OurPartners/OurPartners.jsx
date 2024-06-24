import { assets } from '../../assets/assets';
import './OurPartners.scss';

const OurPartners = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-lg-10 mx-auto text-center">
                <h2 className='section-title text-dark'>Our Major Partners</h2>

                <div className="partners_logo d-flex align-items-center flex-wrap justify-content-center" style={{gap:'20px'}}>
                    <img src={assets.pwLogo} alt="logo" />
                    <img src={assets.vibrantLogo} alt="logo" />
                    <img src={assets.resonanceLogo} alt="logo" />
                    <img src={assets.careerPointLogo} alt="logo" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurPartners