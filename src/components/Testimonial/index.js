import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import './testimonial.css'


class Testimonial extends Component {
    render() {
        var settings = {
            dots: false,
            arrows: true,
            speed: 1000,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const testimonial = [
            {
                tsImg: "./assets/imgs/person1.png",
                Des: "عند الحديث عن الفرص التي يمكن أن تدفع باتجاه تطبيق هذه المبادرة وإنجاحها فهي متعددة، وتشمل الرغبة الشعبية الكبيرة، وحالة التدهور الذي تعيشه القضية الفلسطينية والمخاطر المحدقة بمستقبلها",
                Title: 'أيمن الرفاتي',
                Sub: "https://alresalah.ps/post/265135/%D9%83-%D8%AA-%D8%A7%D8%A8-%D9%88%D8%AB%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B0-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%81%D8%B1%D8%B5%D8%A9-%D9%84%D8%A7-%D9%8A%D9%86%D8%A8%D8%BA%D9%8A-%D8%AA%D9%81%D9%88%D9%8A%D8%AA%D9%87%D8%A7",
            },
            {
                tsImg: "./assets/imgs/person2.jpg",
                Des: "عند الحديث عن الفرص التي يمكن أن تدفع باتجاه تطبيق هذه المبادرة وإنجاحها فهي متعددة، وتشمل الرغبة الشعبية الكبيرة، وحالة التدهور الذي تعيشه القضية الفلسطينية والمخاطر المحدقة بمستقبلها",
                Title: 'أيمن الرفاتي',
                Sub: "https://alresalah.ps/post/265135/%D9%83-%D8%AA-%D8%A7%D8%A8-%D9%88%D8%AB%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B0-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%81%D8%B1%D8%B5%D8%A9-%D9%84%D8%A7-%D9%8A%D9%86%D8%A8%D8%BA%D9%8A-%D8%AA%D9%81%D9%88%D9%8A%D8%AA%D9%87%D8%A7",
            },
            {
                tsImg: "./assets/imgs/person3.jpg",
                Des: "عند الحديث عن الفرص التي يمكن أن تدفع باتجاه تطبيق هذه المبادرة وإنجاحها فهي متعددة، وتشمل الرغبة الشعبية الكبيرة، وحالة التدهور الذي تعيشه القضية الفلسطينية والمخاطر المحدقة بمستقبلها",
                Title: 'أيمن الرفاتي',
                Sub: "https://alresalah.ps/post/265135/%D9%83-%D8%AA-%D8%A7%D8%A8-%D9%88%D8%AB%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B0-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%81%D8%B1%D8%B5%D8%A9-%D9%84%D8%A7-%D9%8A%D9%86%D8%A8%D8%BA%D9%8A-%D8%AA%D9%81%D9%88%D9%8A%D8%AA%D9%87%D8%A7",
            }
            ,
            {
                tsImg: "./assets/imgs/person4.jpg",
                Des: "عند الحديث عن الفرص التي يمكن أن تدفع باتجاه تطبيق هذه المبادرة وإنجاحها فهي متعددة، وتشمل الرغبة الشعبية الكبيرة، وحالة التدهور الذي تعيشه القضية الفلسطينية والمخاطر المحدقة بمستقبلها",
                Title: 'أيمن الرفاتي',
                Sub: "https://alresalah.ps/post/265135/%D9%83-%D8%AA-%D8%A7%D8%A8-%D9%88%D8%AB%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A5%D9%86%D9%82%D8%A7%D8%B0-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A-%D9%81%D8%B1%D8%B5%D8%A9-%D9%84%D8%A7-%D9%8A%D9%86%D8%A8%D8%BA%D9%8A-%D8%AA%D9%81%D9%88%D9%8A%D8%AA%D9%87%D8%A7",
            }
            // ,
            // {
            //     tsImg: "./assets/imgs/person5.jpg",
            //     Des: "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
            //     Title: 'William Robert',
            //     Sub: "CEO Of Bexima",
            // },
            // {
            //     tsImg: "./assets/imgs/person36.jpg",
            //     Des: "Lorem ipsum dolor sit amet, consectetur adiping elit,  do eiusmod tempor incididunt ut labore et doliore magna aliqjtua. Quis ipsum suspendisse ultrices gravida. Risus commodo maepac cenas.",
            //     Title: 'William Robert',
            //     Sub: "CEO Of Bexima",
            // }
        ]
        return (

            <div className="wpo-testimonial-area section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                {/* <span>قالوا عنا</span> */}
                                <h2 style={{color: '#ef5f34'}}>قالوا عنا</h2>
                                {/* <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form,</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="wpo-testimonial-wrap">
                        <div className="testimonial-slider owl-carousel">
                        <Slider {...settings}>
                                {testimonial.map((tesmnl, tsm) => (
                                    <div className="wpo-testimonial-item" key={tsm}>
                                        {/* <div className="wpo-testimonial-img">
                                            <img src={tesmnl.tsImg} alt="" />
                                        </div> */}
                                        <div className="wpo-testimonial-content">
                                            <p>{tesmnl.Des}</p>
                                            <h2>{tesmnl.Title}</h2>
                                            <a href={tesmnl.Sub} target='_blank'>شاهد</a>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial;