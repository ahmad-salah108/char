import React from "react";
import { Link } from 'react-router-dom'
import Clients from './client'

import hero1 from '../../images/slider/right-img2.png'
import hero2 from '../../images/slider/s.png'
import hero3 from '../../images/slider/right-img.png'
// import "../i18nextConf"

import { useTranslation } from 'react-i18next'



const Hero =() => {
    const { t, i18n } = useTranslation()

    return (
        <section className="wpo-hero-section-1" style={{height:"auto", padding:"50px 0"}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col col-xs-6 col-lg-5">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title-top">
                                <span>مبادرة الإنقاذ الوطني</span>
                            </div>
                            {/* <div className="wpo-hero-title">
                                <h2>{t("Euro")}</h2>
                            </div> */}
                            <div className="wpo-hero-subtitle">
                                <p>الموقع الرسمي لوثيقة الانقاذ الوطني.</p>
                            </div>
                            {/* <div className="btns">
                                <Link to="/about" className="btn theme-btn-s2">Get Started</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="right-vec">
                            <div className="right-items-wrap">
                                <div className="right-item">
                                    {/* <div className="r-img">
                                        <img src={"./assets/imgs/palestineflag.png"} style={{width:"400px",height:"569px"}} alt=""/>
                                    </div> */}
                                    {/* <div className="wpo-happy-client">
                                        <Clients/>
                                    </div> */}
                                </div>
                                <div className="right-item">
                                    <div className="wpo-total-project">
                                        {/* <div className="wpo-total-project-wrap">
                                            <div className="wpo-total-project-icon">
                                                <i className="fi flaticon-salary"></i>
                                            </div>
                                            <div className="wpo-total-project-text">
                                                <h3>252+</h3>
                                                <p>Total Projects</p>
                                            </div>
                                        </div> */}
                                        <div className="project-shape">
                                        </div>
                                    </div>
                                    <div className="">
                                        <img src={"./assets/imgs/aqsaa.webp"}  
                                        style={{width:"100%",height:"430px", objectFit:'cover', borderRadius:"20px"}} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;
