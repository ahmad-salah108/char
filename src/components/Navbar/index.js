import React,{useRef} from "react";
import Header from '../header';


export default function Navbar(props) {
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar animated fadeInDown active" : "fixed-navbar";

  return (
    <div className={className}>
        <Header lastNews={props.lastNews} initiative={props.initiative} aboutus={props.aboutus} hclass={props.hclass} Logo={props.Logo} topbarNone={props.topbarNone}/>
    </div>
  ); 
}