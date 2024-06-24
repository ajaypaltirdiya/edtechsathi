import { weDo } from '../../assets/assets';
import './WhatWeDo.scss';

const WhatWeDo = () => {

  return (
    <section className="what-we-do-section" id='what-we-do'>
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-10 mt-2 mx-auto text-center">
                    <h2 className='section-title text-dark'>What do we do?</h2>
                </div>
            </div>

            <div className="row g-4 we-do-mb">
                {weDo.map(item => {
                    return(
                        <div key={item.title} className="col-lg-6">
                        <div className="weDo_item">
                            <img src={item.icon} alt="icon" />
                            <div className="weDo_content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default WhatWeDo