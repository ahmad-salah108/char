import React from 'react'
import {Link}  from 'react-router-dom'
import Logo from '../../images/logo2.png'
import Projects from '../../api/projects'
import './footer.css'

const Footer = (props) =>{

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

  return(
    <footer className="wpo-site-footer">
        <div className="wpo-upper-footer">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="widget about-widget">
                            <div className="logo widget-title">
                                <img src={"./assets/imgs/logoo.jpeg"} style={{width:"150px",height:"150px",borderRadius:"100%"}} alt="blog"/>
                            </div>
                            <p>وثيقة الانقاذ الوطني يرحب بكم<br/>وثيقة الانقاذ الوطني يرحب بكم</p>
                            <ul style={{padding: 0, margin: 0}}>
                                <li>
                                    <Link to="/">
                                        <i className="ti-facebook"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-twitter-alt"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-instagram"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i className="ti-google"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="widget wpo-service-link-widget">
                            <div className="widget-title">
                                <h3>تواصل معنا</h3>
                            </div>
                            <div className="contact-ft">
                                <p>اذا لديك اي تساؤل. رجاء لا تتردد في التواصل معنا</p>
                                <ul style={{padding: 0}}>
                                    <li><i className="fi flaticon-mail"></i>charitio@gmail.com</li>
                                    <li><i className="fi flaticon-phone-call"></i>+888 (123) 869523</li>
                                    <li><i className="fi flaticon-location"></i>New York – 1075 Firs Avenue</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <p className="copyright"> &copy; 2021 Developed By Domino ICT. All Rights Reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    </footer>
  )
} 

export default Footer;