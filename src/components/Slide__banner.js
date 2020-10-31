import React from 'react';
import '../style/reset.css';
import '../style/slideBanner.css';
import SimpleImageSlider from "react-simple-image-slider";
import { banners } from "./slide__banner__src";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import image1 from '../images/slideBanner/banner01.png';
import image2 from '../images/slideBanner/banner02.png';
import image3 from '../images/slideBanner/banner03.png';
import image4 from '../images/slideBanner/banner04.png';
import image5 from '../images/slideBanner/banner05.png';

class Slide__banner extends React.Component {

//     navRef = React.createRef();
//     constructor(props){
//         super(props)
//         this.state = {
//             cur:0, direction:'right'
//         }
//     }

//     componentDidMount(){
//         console.log(this.navRef.current)
//         setInterval(() => {

//             this.state.direction === 'right' ? 
//             this.navRef.current.onClickNav(true):
//             this.navRef.current.onClickNav(false)

//             this.state.direction === 'right'? 
//             this.setState({cur: this.state.cur+1}):
//             this.setState({cur: this.state.cur-1})

//             if(this.state.cur === 7)this.setState({direction:'left'})
//             if(this.state.cur === 1)this.setState({direction:'right'})
//         }, 1500);
//     }
//     render() {
//         return (
//             <div className={'slide__banner'}>
//                 <SimpleImageSlider
//                 ref = {this.navRef}
//                 width={"100%"}
//                 height={200}
//                     images={banners}
//                 />
//             </div>
//         );
//     }
// }


// =================================>> ==========

// class Slide__banner extends React.Component {
//     render() {
//         return <div className={'slide__banner'}>
//             <nav className={'banner__wrap'}>
//                 <ul className={'banner__wrap__ul'}>
//                     <li>
//                         <a href={'#'}>
//                             <img src={Banner} alt={'banner image'} />
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     }

// =================================>> ==========


    render() {
        return (
            <AliceCarousel autoPlay autoPlayInterval="2000">
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
                <img src={image4} className="sliderimg"/>
                <img src={image5} className="sliderimg"/>
            </AliceCarousel>
        )
}







}

export default Slide__banner;

