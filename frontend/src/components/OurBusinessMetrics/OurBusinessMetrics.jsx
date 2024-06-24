import { assets } from '../../assets/assets';
import './OurBusinessMetrics.scss';

const OurBusinessMetrics = () => {
    const metricsData = [
        {
            count:'+250',
            title:'Hostel options in Kota'
        },
        {
            count:'+250',
            title:'Schools associated with our brand'
        },
        {
            count:'+5',
            title:'Top Institutes'
        },
        {
            count:'+25',
            title:'Individual coaching institutes'
        }
    ]
  return (
    <section className="our-business-metrics">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-md-6 order-2 order-lg-1 col-lg-6 align-self-end">
                    <img src={assets.ourBusiness} className='business-girl img-fluid' alt="vector" />
                </div>
                <div className="col-md-6 col-lg-6 order-1 order-lg-2">
                    <h2 className='section-title color-secondary'>Our Services</h2>
                    <p>Welcome to Edtechsathi where we are dedicated to transforming the educational
                    journey of students across India.</p>

                    <div className="metrics-datas">
                        {metricsData.map(item => (
                            <div key={item.title} className="data-item">
                                <img src={assets.badge} alt="badge" />
                                <h3>{item.count}</h3>
                                <p>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurBusinessMetrics