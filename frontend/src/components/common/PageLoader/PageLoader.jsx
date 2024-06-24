import { assets } from '../../../assets/assets'
import './PageLoader.scss'

const PageLoader = () => {
  return (
    <div className="page-loader text-white text-center d-flex flex-direction-column justify-content-center align-items-center py-5" style={{height:'100vh', width:'100%', background:'#000'}}>
        <div className="loader-wrap text-center">
            <img src={assets.logo} alt="" />
            <h5 className='mt-3'>Loading..</h5>
        </div>
    </div>
    
  )
}

export default PageLoader