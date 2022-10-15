import React from 'react'
import {Link} from  'react-router-dom'
import abimg from '../../images/about.jpg'
import shape from '../../images/ab-shape-2.png'


const About = ({aboutus}) => {

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }


    return(
        <section ref={aboutus} className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-img">
                                <img src={abimg} alt=""/>
                                <div className="wpo-ab-shape-1">
                                    <div className="s-s1"></div>
                                    <div className="s-s2"></div>
                                </div>
                                <div className="wpo-ab-shape-2"><img src={shape} alt=""/></div>
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
                            <span>تواصل معنا</span>
                            <h2>مقدمة للمواطن الفلسطيني في اماكن تواجده كافة</h2>
                            <p>هذه الوثيقة مقدّمة إلى المواطن الفلسطيني في أماكن تواجده كافة، وإلى الفصائل 
والقوى والتجمعات الفلسطينية، من قبل مجموعة من الشخصيّات الوطنية من 
مشارب سياسية متعددة، ال تشكل حزب ا أو تجمع ا سياسي ا. نقدم هذه المبادرة بعد 
مرور أكثر من عام على إلغاء االنتخابات التشريعية والرئاسية، وبعد اإلصرار على 
عقد المجلس المركزي في شباط من هذا العام، على الرغم مما اعتراه من عوار 
قانوني وسياسي، ومع استمرار التدهور الحادّ في الحالة الفلسطينية واالستكانة 
وفي محاولة لمنع االنهيار الكامل الوشيك. هدفنا الدف ع نحو السياسية تجاه ذلك، 
حال ة وطني ة تنجز تغيي را واسع ا وعميق ا في النظام الفلسطيني السياسي، وتعيد بناء 
مؤسساته؛ ذلك لتمكين شعبنا من مواجهة األخطار الكبرى التي تهدد وجوده 
وأهدافه الوطنية. . </p>
                            {/* <ul>
                                <li>The standard chunk of Lorem Ipsum used since.</li>
                                <li>Randomised words which don't look even slightly believable.</li>
                                <li>Making this the first true generator on the Internet.</li>
                            </ul> */}
                            {/* <Link onClick={ClickHandler} className="theme-btn-s2" to="/about">مزيد عن المبادرة</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;