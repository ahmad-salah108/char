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
                                <img src={'https://images.pexels.com/photos/8194919/pexels-photo-8194919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt=""/>
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
                            <span>مقدمة</span>
                            <h2>هذه الوثيقة السياسية تطرح تصّورا للتغيير الواسع والعميق اللازم</h2>
                            <p>هذه الوثيقة السياسية تطرح تصّورا للتغيير الواسع والعميق اللازم، الذي يتضمن إعادة بناء المؤسسات الفلسطينية، خاصة منظمة التحرير الفلسطينية (م.ت.ف.)، من خلال مجلس وطني جديد عماده االنتخابات العامة، إضافة إلى رزمة من بينها إنهاء االنقسام واستعادة الوحدة، وتشكيل حكومة جديدة بعيداً عن الشروط المجحفة، والانتقال السياسي وآلية تحقيق ذلك.
هذا التصور يتطلب توافقاً وطنياً واسعاً، وكذلك الالتزام بالديمقراطية وأسس الحكم الرشيد، وجميع العناصر الالزمة لمواجهة العدوان والتحديات الإسرائيلية القائمة. الخطوة العملية لإنجاز ما سبق هي تحقيق لقاء وحوار وطني يقود إلى توافق على التصور وآلية االنتقال. وحرصاً على الحالة العامة حتى النهاية، نرى إبقاء الباب مفتوحاً أمام كل الأطراف التي تقبل الخطوط العامة المطروحة هنا، خاصة الحاجة إلى التغيير الواسع والعميق، وضرورة الذهاب إلى االنتخابات العامة.
يتطلب تحقيق ما سبق آلية تتمثل في تشكيل هيئة مؤقتة، تكون مسؤولة عن إجراء الحوار الوطني وتنفيذ نتائجه، على أن يكون تاريخ عمل الهيئة محد دا بفترة ال تزيد على عام، وأن تكون العضوية محدّدة ومعروفة، وبما يعكس الحالة الفلسطينية الواقعية، بما في ذلك التغييرات األخيرة التي سادت قبيل االنتخابات الملغاة، على أن تشكل اآللية من خالل التوافق الوطني وهي ليست بديلاً من الهيئات القائمة. ويتطلب أيضاً ممارسة الضغط السياسي والجماهيري والقانوني لحشد التأييد إلحداث التغيير.
</p>
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