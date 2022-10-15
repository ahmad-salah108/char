import React from 'react'
import BlogSidebar from '../BlogSidebar'
import VideoModal from '../../components/ModalVideo'
import {Link} from 'react-router-dom'


const NewsList = () => {
    const blogs = [
        {
            NEW_ID: '1',
            TITLE: 'خبررر',
            BRIEF: 'لايوجد',
            AUTHOR: 'سعدي',
            CREATED_ON:'',
            NEW_IMAGES:[],
            NEW_VIDEOS:[]


        },
        {
            NEW_ID: '2',
            TITLE: 'خبررر',
            BRIEF: 'لايوجد',
            AUTHOR: 'سعدي',
            CREATED_ON:'',
            NEW_IMAGES:[],
            NEW_VIDEOS:[]
        },
        {
            NEW_ID: '3',
            TITLE: 'خبررر',
            BRIEF: 'لايوجد',
            AUTHOR: 'سعدي',
            CREATED_ON:'',
            NEW_IMAGES:[],
            NEW_VIDEOS:[]
        },
        {
            NEW_ID: '4',
            TITLE: 'خبررر',
            BRIEF: 'لايوجد',
            AUTHOR: 'سعدي',
            CREATED_ON:'',
            NEW_IMAGES:[],
            NEW_VIDEOS:[]
        }
        ,
        {
            NEW_ID: '5',
            TITLE: 'خبررر',
            BRIEF: 'لايوجد',
            AUTHOR: 'سعدي',
            CREATED_ON:'',
            NEW_IMAGES:[],
            NEW_VIDEOS:[]
        }]
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
  return (
   <section className='section-padding'>
    <div className='container'>
        <div className='row px-3 py-4' style={{
            color:"#ef5f34",
            fontWeight:700,
            fontSize:"22px"
        }}>
            اخر الاخبار

        </div>
        <div className='row' > 
        <div className='col col-lg-8 col-md-12'>
        <div className="wpo-blog-content">
        {blogs.slice(0,4).map((blog, bitem) => (
                                <div className={`post format-standard-image`} key={bitem}>
                                    <div className="entry-media video-holder">
                                        <img style={{width:"1200px",height:"778px"}} src={"./image1.jpg"} alt=""/>
                                    </div>
                                    <div className="entry-meta">
                                        <ul className='py-3'>
                                            <li><i className="fi flaticon-user"></i> بواسطة سعدي </li>

                                        </ul>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} to={``}>{blog.TITLE}</Link></h3>
                                        <p>{blog.BRIEF}</p>
                                    </div>
                                </div>
                            ))}

        </div>
        <div className="pagination-wrapper pagination-wrapper-right">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link to="/blog-left-sidebar">1</Link></li>
                                    <li><Link to="/blog-left-sidebar">2</Link></li>
                                    <li><Link to="/blog-left-sidebar">3</Link></li>
                                    <li>
                                        <Link to="/blog-left-sidebar" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
        </div>

        </div>

    </div>
   </section>
  )
}

export default NewsList