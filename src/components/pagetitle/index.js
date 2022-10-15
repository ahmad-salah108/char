import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return(
       
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                    <img style={{width:"1920px",height:"400px"}} src='./assets/imgs/covr.png'/>
                        {/* <div className="wpo-breadcumb-wrap">


                            
                            <h2>{props.pageTitle}</h2>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><span>{props.pagesub}</span></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
   
    )
}

export default PageTitle;