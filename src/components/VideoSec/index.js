import React from 'react'
import abimg from '../../images/about-vedio.jpg'
import VideoModal from '../../components/ModalVideo'

const VideoSec = (props) => {


    return(
        <div className="wpo-about-video-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="wpo-about-video-item">
                            <div className="wpo-about-video-img">
                            <img style={{width:"860px",height:"500px"}} src='./assets/imgs/aqsaa.webp'/>
                                {/* <img src={abimg} alt=""/> */}
                                <div className="entry-media video-holder">
                                    <VideoModal/>
                                </div>
                            </div>
                            <h2>مبادرة الإلنقاذ الوطني <span>هيئة انتقالية لانجاز التغيير وإعادة البناء </span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSec;