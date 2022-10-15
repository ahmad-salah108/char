import React, { useEffect, useState } from 'react'
// import blogs from '../../api/blogs'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import axios from 'axios'

const BlogSection = (props) => {
    const [blogs, setBlogs] = useState();
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
                    <div className="wpo-blog-items">
                        <div className="row">
                            {blogs?.slice(1, 4).map((blog, Bitem) => (
                                <div className="col col-lg-4 col-md-6 col-12" key={Bitem}>
                                    <div className="wpo-blog-item">
                                        <div className="wpo-blog-img">

                                            <img style={{
                                                width: "417px",
                                                height: "250px"
                                            }} src={blog.NEW_IMAGES?.length > 0 ? `data:image/${blog.NEW_IMAGES[0].FILE_TYPE};base64,${blog.NEW_IMAGES[0].FILE_B64}` : './assets/imgs/defaultNewImage.png'} alt="" />
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