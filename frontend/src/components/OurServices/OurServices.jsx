import { assets } from '../../assets/assets';
import './OurServices.scss';

const OurServices = () => {
  return (
    <section className="our-services-section" id='services'>
        <img src={assets.dotbg} className='leftTop' alt="" />
        <img src={assets.serviceRightVec} className='rightTop' alt="" />

        <div className="container">
        <div className="row mb-5">
            <div className="col-lg-10 mx-auto text-center">
                <h2 className='section-title text-dark'>Our Services</h2>
                <p>Welcome to Edtechsathi where we are dedicated to transforming the educational<br></br>
                journey of students across India.</p>
            </div>
        </div>

        <div className="row g-4">
            <div className="col-md-6 col-lg-3">
                <div className="service-box">
                    <img src={assets.accomodation} alt="" />
                    <h3>Hostel Accommodation</h3>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="service-box">
                    <img src={assets.institueIcon} alt="" />
                    <h3>Institutes Admission Support</h3>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="service-box">
                    <img src={assets.dummyVector} alt="" />
                    <h3>Dummy Schools Enrollment</h3>
                </div>
            </div>

            <div className="col-md-6 col-lg-3">
                <div className="service-box">
                    <img src={assets.privateCollege} alt="" />
                    <h3>Private College Admissions</h3>
                </div>
            </div>

        </div>
    </div>

    </section>
  )
}

export default OurServices