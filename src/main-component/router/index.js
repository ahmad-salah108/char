import React, { useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import Homepage3 from '../HomePage3'
import Homepage4 from '../HomePage4'
import Homepage5 from '../HomePage5'
import Homepage6 from '../HomePage6'
import Homepage7 from '../HomePage7'
import AboutPage from '../AboutPage'
import ServicePage from '../ServicePage'
import SeviceSinglePage from '../SeviceSinglePage'
import CauseSinglePage from '../CauseSinglePage'
import TeamSinglePage from '../TeamSinglePage'
import EventPage from '../EventPage'
import EventPage2 from '../EventPage2'
import EventSinglePage from '../EventSinglePage'
import ProjectPage from '../ProjectPage'
import ProjectSinglePage from '../ProjectSinglePage'
// import "../../i18nextConf"
import CausePage from '../CausePage'
import TestimonialPage from '../TestimonialPage'
import BlogPage from '../BlogPage'
import BlogPageLeft from '../BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails'
import BlogDetailsFull from '../BlogDetailsFull'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
import DonatePage from '../DonatePage'
import VolunteerPage from '../VolunteerPage'
import LoginPage from '../LoginPage'
import SignUpPage from '../SignUpPage'
import ForgotPassword from '../ForgotPassword'
import AllNews from "../../components/AllNews"


const AllRoute = () => {
  const aboutUsRef = useRef()

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/home' component={Homepage} />
          <Route path='/home2' component={Homepage2} />
          <Route path='/home3' component={Homepage3} />
          <Route path='/home4' component={Homepage4} />
          <Route path='/home5' component={Homepage5} />
          <Route path='/home6' component={Homepage6} />
          <Route path='/home7' component={Homepage7} />
          <Route path='/about' component={AboutPage} />
          <Route path='/service' component={ServicePage} />
          <Route path='/all-news' component={AllNews} />
          <Route path='/service-single/:id' component={SeviceSinglePage} />
          <Route path='/cause' component={CausePage} />
          <Route path='/cause-single/:id' component={CauseSinglePage} />
          <Route path='/team-single/:id' component={TeamSinglePage} />
          <Route path='/event' component={EventPage} />
          <Route path='/event-s2' component={EventPage2} />
          <Route path='/event-single/:id' component={EventSinglePage} />
          <Route path='/project' component={ProjectPage} />
          <Route path='/project-single/:id' component={ProjectSinglePage} />
          <Route path='/testimonial' component={TestimonialPage} />
          <Route path='/blog-single/:id' component={BlogDetails} />
          <Route path='/blog-single-left-sidebar/:id' component={BlogDetailsLeftSiide} />
          <Route path='/blog-single-fullwidth/:id' component={BlogDetailsFull} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/blog-left-sidebar' component={BlogPageLeft} />
          <Route path='/blog-fullwidth' component={BlogPageFullwidth} />
          <Route path='/donate' component={DonatePage} />
          <Route path='/volunteer' component={VolunteerPage} />
          <Route path='/404' component={ErrorPage} />
          <Route path='/contact' component={ContactPage} />
          {/* 
            <Route path='/attorneys' component={AttorneysPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/practice' component={PracticePage}/>
            <Route path='/practice-s2' component={PracticePageS2}/>
            <Route path='/case-single/:id' component={caseSinglePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/shop-single/:id' component={ShopSinglePage}/>
            <Route path='/cart' component={CartPage}/>
            <Route path='/checkout' component={CheckoutPage}/>
            <Route path='/faq' component={FaqPage}/>
            */}
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={SignUpPage} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </Router>

    </div>
  );
}

export default AllRoute;
