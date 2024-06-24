import AboutUs from "../../components/AboutUs/AboutUs"
import OurBusinessMetrics from "../../components/OurBusinessMetrics/OurBusinessMetrics"
import OurOffer from "../../components/OurOffer/OurOffer"
import OurPartners from "../../components/OurPartners/OurPartners"
import OurServices from "../../components/OurServices/OurServices"
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo"
import Header from "../../components/common/Header/Header"


const Home = () => {
  return (
    <>
    <Header/>
    <AboutUs/>
    <OurServices/>
    <WhatWeDo/>
    <OurBusinessMetrics/>
    <OurOffer/>
    <OurPartners/>
    </>
  )
}

export default Home