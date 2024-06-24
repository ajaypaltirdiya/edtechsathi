import './Header.scss';
import {assets} from '../../../assets/assets';
import LeadForm from './LeadForm';

const Header = () => {
  return (
    <div className="header-contain" id='home'>
        <img src={assets.dashedLine} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto">
              <div className="header-wrapper text-center position-relative">

                <h1 className='text-white'>Let's Make the Kota <br></br>
                Experience <span>Hassle-Free</span></h1>
                <p>We provide hand holding support to Students in Kota from Helping them registering in their favourite institute, finding best suitable
                  Hostel and taking dummy admissions for board examination, All this absolutely free.</p>

                  <div className="header-formWrapper text-start">
                    <h3>How We Can Help You</h3>
                      <LeadForm/>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Header