import React, {Fragment, useRef} from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero'
import Service from '../../components/Service'
import About from '../../components/about'
import AboutUs from '../../components/aboutus'

import CauseSection from '../../components/CauseSection'
import TeamSection from '../../components/TeamSection'
import Testimonial from '../../components/Testimonial'
import CtaSection from '../../components/ctaSection'
import EventSection from '../../components/EventSection'
import BlogSection from '../../components/BlogSection'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.png'
import PartnerSection from '../../components/PartnerSection';

import vimg from '../../images/volunteer.png'


const HomePage =() => {
    const aboutus = useRef(null)
    const initiative = useRef(null)
    const lastNews = useRef(null)
    return(
        <Fragment>
            <Navbar lastNews={lastNews} initiative={initiative} aboutus={aboutus} Logo={Logo}/>
            <Hero/>
            {/* <Service Fclass={'wpo-features-section-s2'} vclassClass={'v1'}/> */}
            <About initiative={initiative}/>
            <AboutUs aboutus={aboutus} />

            {/* <CauseSection/> */}
            {/* <TeamSection/> */}
            <Testimonial/>
            {/* <CtaSection vImg={vimg} cTitle={'Lets Chenge The World With Humanity'}/> */}
            {/* <EventSection/> */}
            <BlogSection lastNews={lastNews}/>
            <PartnerSection/>
            <Scrollbar/>
            <Footer/>
        </Fragment>
    )
};
export default HomePage;