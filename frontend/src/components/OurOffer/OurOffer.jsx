import { assets } from '../../assets/assets';
import './OurOffer.scss';

const OurOffer = () => {
  return (
    <div className="container our-offer-section">
        <div className="row">
            <div className="col-lg-12">
                <div className="offer-wrap">
                    <img src={assets.offerVector} alt="" />
                    <div className="offer-content">
                        <h3>How can we offer this for free?</h3>
                        <p>As major partners with leading institutes and hostels in Kota, we help them save on operational and 
                        marketing costs and earn through affiliations. This allows us to offer you the best rates with added convenience.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurOffer