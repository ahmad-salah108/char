import React, { useEffect, useState } from 'react'
// import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'
import './blogSection.css'

const BlogSection = (props) => {
    const [blogs, setBlogs] = useState([
        {
            AUTHOR:"عادل",
            IMAGES:[{FILE:"https://khbrpress.ps/thumb/730x400/uploads/images/2020/12/WemNk.jpeg"}],
            TITLE:" إحصائية حوادث السير في قطاع غزة خلال الأسبوع الماضي",
            BRIEF:"نشرت وزارة الداخلية في غزة ، صباح يوم السبت، إحصائية حوادث السير بالقطاع، خلال الأسبوع الماضي 8-14 أكتوبر 2022.",
            NEW_ID:1
        },
        {
            AUTHOR:"عادل",
            IMAGES:[{FILE:"https://khbrpress.ps/thumb/730x400/uploads/images/2020/12/WemNk.jpeg"}],
            TITLE:" إحصائية حوادث السير في قطاع غزة خلال الأسبوع الماضي",
            BRIEF:"نشرت وزارة الداخلية في غزة ، صباح يوم السبت، إحصائية حوادث السير بالقطاع، خلال الأسبوع الماضي 8-14 أكتوبر 2022.",
            NEW_ID:3
        },
        {
            AUTHOR:"عادل",
            IMAGES:[{FILE:"https://khbrpress.ps/thumb/730x400/uploads/images/2020/12/WemNk.jpeg"}],
            TITLE:" إحصائية حوادث السير في قطاع غزة خلال الأسبوع الماضي",
            BRIEF:"نشرت وزارة الداخلية في غزة ، صباح يوم السبت، إحصائية حوادث السير بالقطاع، خلال الأسبوع الماضي 8-14 أكتوبر 2022.",
            NEW_ID:3
        },
        {
            AUTHOR:"عادل",
            IMAGES:[{FILE:"https://khbrpress.ps/thumb/730x400/uploads/images/2020/12/WemNk.jpeg"}],
            TITLE:" إحصائية حوادث السير في قطاع غزة خلال الأسبوع الماضي",
            BRIEF:"نشرت وزارة الداخلية في غزة ، صباح يوم السبت، إحصائية حوادث السير بالقطاع، خلال الأسبوع الماضي 8-14 أكتوبر 2022.",
            NEW_ID:4
        }
    ]);
    useEffect(() => {
        axios.post('https://localhost:44387/api/News/getAllNews', { LANG_ID: "AR" })
            .then((res) => {
                setBlogs(res.data.data.data)
            })
    }, [])

    useEffect(() => {
        console.log(blogs);
    })
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <>
            <section ref={props.lastNews} className="wpo-blog-section section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="wpo-section-title">
                                <span>أخر الأخبار</span>
                                <h2>تصفح أخر الأخبار</h2>
                            </div>
                        </div>
                    </div>
                    <h3 className='loadMore'>
                        <Link to="/all-news">عرض المزيد</Link>
                    </h3>
                    <div className="wpo-blog-items">
                        <div className="row">
                            {blogs?.slice(1, 4).map((blog, Bitem) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                    <div className="wpo-blog-item">
                                        <div className="wpo-blog-img">

                                            <img style={{
                                                width: "100%",
                                                maxWidth:"100%"
                                            }} src={blog.IMAGES?.length > 0 ? blog.IMAGES[0].FILE : './assets/imgs/defaultNewImage.png'} alt="" />
                                        </div>
                                        <div className="wpo-blog-content">
                                            <div className="wpo-blog-content-top">
                                                <h2><Link onClick={ClickHandler} to={`/blog-single/${blog.NEW_ID}`}>{blog.TITLE}</Link></h2>
                                            </div>
                                            <div className="wpo-blog-content-top" style={{ height: "100px" }}>
                                                <h6 style={{
                                                    overflowX: "hidden",
                                                    overflowY: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "wrap",
                                                    width: "100%",
                                                    display: "block",
                                                }}>{blog.BRIEF}</h6>
                                            </div>
                                            <div className="wpo-blog-content-btm">
                                                <div className="wpo-blog-content-btm-left">
                                                    <div className="wpo-blog-content-btm-left-text">
                                                        <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.NEW_ID}`}>{blog.AUTHOR}</Link></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogSection;