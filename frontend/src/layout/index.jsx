import {Outlet} from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer/Footer';

const index = () => {
  return (
    <>
    <header>
    <Navbar/>
    </header>
    <div><Outlet/></div>
    <Footer/>
  
    </>
  )
}

export default index