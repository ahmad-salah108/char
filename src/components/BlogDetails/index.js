import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ReactHtmlParser from 'react-html-parser';
import axios from 'axios';
import moment from 'moment';
import { Player } from 'video-react';

const BlogSingle = (props) => {

    const { id } = useParams()
    const [New, setNew] = useState();
    const converttoBytes = (base64) => {
        // const byteVedio = Buffer.from(base64, "base64");
    }
    useEffect(() => {
        console.log(New);
    }, [New])
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    useEffect(() => {
        axios.post('https://localhost:44387/api/News/getNew',
            {
                NEW_ID: id,
                LANG_ID: "AR"
            })
            .then((res) => {
                setNew(res.data.data.data[0])
            })
            .catch((err) => {
            })
    }, [])


    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <img src={New?.NEW_IMAGES?.length > 0 ? `data:image/${New?.NEW_IMAGES[0].FILE_TYPE};base64,${New?.NEW_IMAGES[0].FILE_B64}` : '../assets/imgs/defaultNewImage.png'} alt="" />
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        <li><i className="fi flaticon-user"></i>{New?.AUTHOR}</li>
                                        <li><i className="fi flaticon-calendar"></i> {moment(New?.CREATED_ON).format("DD/MM/YYYY")}</li>
                                    </ul>
                                </div>
                                <h2 style={{ fonSize: "22px", fontWeight: 700, fontFamily: "Muli" }}>{New?.TITLE}</h2>
                                <p>{New?.BRIEF}</p>
                                {
                                    ReactHtmlParser(New?.CONTENT.substring(2, New?.CONTENT.length - 1))}
                                {/* {
                                    blogDetailss.NEW_IMAGES.length > 0 ?

                                        blogDetailss.NEW_IMAGES.map(item => (
                                            <div className="gallery">
                                                <div>
                                                    <img src={item.src} alt="" />
                                                </div>
                                            </div>
                                        ))

                                        :
                                        ''
                                } */}
                            </div>
                            <div className="author-box">
                                <div className="author-content">
                                    المؤلف: {New?.AUTHOR}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`col col-lg-4 col-md-12 col-12`}>
                        <div className="blog-sidebar">
                            <div className="widget about-widget">
                                <div className="img-holder" style={{ width: "100%" }}>
                                    <Player
                                        className={`video-js vjs-big-play-centered vjs-theme-${"sea"}`}
                                        playsInline
                                        poster={New?.NEW_IMAGES?.length > 0 ? `data:image/${New?.NEW_IMAGES[0].FILE_TYPE};base64,${New?.NEW_IMAGES[0].FILE_B64}` : '../assets/imgs/defaultNewImage.png'}
                                        src={New?.NEW_VIDEOS?.length > 0 ? `data:video/${New?.NEW_VIDEOS[0].FILE_TYPE};base64,${New?.NEW_VIDEOS[0].FILE_B64}` : <></>}
                                    />
                                </div>
                            </div>
                            {/* <h4>Jenny Watson</h4>
                    <p>Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-facebook"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-linkedin"></i></Link></li>
                            <li><Link onClick={ClickHandler} to="/blog-single/1"><i className="ti-pinterest"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Search Post.."/>
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Categories</h3>
                    <ul>
                        {Services.slice(0,6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} to={`/service-single/${service.id}`}>{service.title} <span>{service.id}</span></Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Related Posts</h3>
                    <div className="posts">
                        {blogs.slice(0, 3).map((blog, Bitem) => (
                            <div className="post" key={Bitem}>
                                <div className="img-holder">
                                    <img src={blog.screens} alt="" />
                                </div>
                                <div className="details">
                                    <h4><Link onClick={ClickHandler} to={`/blog-single/${blog.id}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        <h3>Projects</h3>
                    </div>
                    <ul className="d-flex">
                        {Projects.slice(0,6).map((project, pitem)=>(
                            <li className="grid" key={pitem}>
                                <div className="img-holder">
                                    <Link onClick={ClickHandler} to={`/project-single/${project.id}`}>
                                        <img src={project.projectImg} alt=""/>
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget tag-widget">
                    <h3>Tags</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Charity</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Planning</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Helping</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Education</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Medical</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Wildlife</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Donation</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">Help</Link></li>
                        <li><Link onClick={ClickHandler} to="/cause-single/1">World Pandamic</Link></li>
                    </ul>
                </div>
                <div className="wpo-contact-widget widget">
                        <h2>How We Can <br/> Help You!</h2>
                        <p>labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        <Link onClick={ClickHandler} to="/contact">Contact Us</Link>
                </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
