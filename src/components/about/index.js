import React from 'react'
import {Link} from  'react-router-dom'
import abimg from '../../images/about.jpg'
import shape from '../../images/ab-shape-2.png'
import './about.css'


const About = (props) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section ref={props.initiative} className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={"https://images.pexels.com/photos/8194913/pexels-photo-8194913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                                style={{width:"500px", height:"500px", objectFit:"cover"}}
                                alt=""/>
                                {/* <div className="wpo-ab-shape-1">
                                    <div className="s-s1"></div>
                                    <div className="s-s2"></div>
                                </div>
                                <div className="wpo-ab-shape-2"><img src={shape} alt=""/></div> */}
                                {/* <div className="wpo-total-raised">
                                    <div className="wpo-total-raised-wrap">
                                        <div className="wpo-total-raised-icon">
                                            <i className="fi flaticon-wallet-filled-money-tool"></i>
                                        </div>
                                        <div className="wpo-total-raised-text">
                                            <ul>
                                                <li>Total Raised<span>$25000</span></li>
                                            </ul>
                                            <div className="progress-section">
                                                <div className="process">
                                                    <div className="progress">
                                                        <div className="progress-bar">
                                                            <div className="progress-value"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <span style={{color:"#d6b128"}}>???? ??????</span>
                            <h2>???????????? ???? ?????????????????? ?????????????? ???? ?????????? ???????????? ????????????</h2>
                            <p>???????????? ???? ?????????????????? ?????????????? ???? ?????????? ???????????? ?????????????? ???? ???????? ???????? ???? ?????????? ???????????? ?????????? ???????????? ???????? ?????????????? ???????????? ???? ???????? ???????????? ???????? ???? ?????????? ?????????? ?????????????????? ?????? ????????????. ?????????? ???? ???????? ???????? ?????????????????? ?????? ?????? ???????????? ???????????????? ???????????? ???????? ?????????? ???? ?????????????????? ?????????????????????? ???????? ???? ???????? ???????????? ???????? ???????? ???????????? ???? ???? ???? ???????????? ?????? ?????????????? ?????????????? ?????????????????? ???????? ????????????  ?????????? ?????????????? ???????????? ?????????? ???? ??????. 
?????????? ?????????? ?????? ???????????????? ???????? ???????? ???????? ?????????? ???????? ?????????????? ???????????? ?????????????? ???? ???????????? ?????????????????? ???????????????? ?????????? ???????? ???????????????? ?????? ???????????? ?????????? ???? ???????????? ?????????????? ???????????? ???????? ???????? ?????????? ?????????????? ??????????????.
?????????? ???????????? ?????? ?????????? ?????????????? ???????????? ?????? ?????????? ?????????? ???? ?????????????? ?????????????????????????? ???????????? ?????????????? ?????????????? ?????? ?????? ???? ?????? ??????????????. ?????????? ?????????? ?????? ?????????? ???????????? ???????????? ?????? ?????????? ?????????????? ???????????????? ?????? ???? ???????? ???? ???? ?????????????? ?????????? ?????????????? ???????????????? ???????????? ?????????????????? ???????? ???????????? ???????????? ???????????? ?????????????? ???????????????? ???????? ?????????? ???????????? ?????? ????????????????. ???????? ???????????? ???????????? ???? ???????????? ?????????????? ???????????????????? ???????????????????? ?????????????????????? ?????? ?????????????? ?????????????? ???????? ?????? ?????? ?????????????? ?????????????? ??????????????.
</p>
                            {/* <ul>
                                <li>The standard chunk of Lorem Ipsum used since.</li>
                                <li>Randomised words which don't look even slightly believable.</li>
                                <li>Making this the first true generator on the Internet.</li>
                            </ul> */}
                            <Link onClick={ClickHandler} style={{backgroundColor: '#333', padding: '15px 30px', textDecoration: 'none', color: '#d6b128', borderRadius: '6px', display:'block', width: 'fit-content', marginTop: '20px', fontWeight: '700'}} to="/about">???????????? ??????</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;