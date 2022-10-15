import React from 'react'
import { Fragment } from 'react'
import Navbar from '../../components/Navbar'
import PageTitle from './Title'
import NewsList from './NewsList'




const AllNews = () => {
  return (
 <Fragment>
  <Navbar Logo={""}/>
  {/* <PageTitle/> */}
  <NewsList/>
  {/* <BlogList blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/> */}


 </Fragment>
  )
}

export default AllNews