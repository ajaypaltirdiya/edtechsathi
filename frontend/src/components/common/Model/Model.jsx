import { useState } from 'react';
import { assets } from '../../../assets/assets';
import './Model.scss';


const Model = ({title,description}) => {
    const [showModel, setShowModel] = useState(false);
    const modelHandler = (e) => {
        e.preventDefault();
        setShowModel(false)
    }
  return (
  <>
  <div className={`model ${showModel ? 'd-block':'d-none'}`}>
        <div className="model-overlay"></div>
        <div className="model-wrapper">
            {/* <img src={assets.closeIcon} onClick={modelHandler} className='model-close' alt="" /> */}
            <div className="model-title">{title}</div>
            <div className="model-description">{description}</div>
            <button type="button" onClick={modelHandler}>Ok</button>
        </div>
    </div>
    </>
  )
}

export default Model