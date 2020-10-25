import React from 'react';
import '../style/reset.css';
import '../style/slideBanner.css';
import SimpleImageSlider from "react-simple-image-slider";
import { banners } from "./slide__banner__src";

class Slide__banner extends React.Component {

    navRef = React.createRef();
    constructor(props){
        super(props)
        this.state = {
            cur:0, direction:'right'
        }
    }

    componentDidMount(){
        console.log(this.navRef.current)
        setInterval(() => {

            this.state.direction === 'right' ? 
            this.navRef.current.onClickNav(true):
            this.navRef.current.onClickNav(false)

            this.state.direction === 'right'? 
            this.setState({cur: this.state.cur+1}):
            this.setState({cur: this.state.cur-1})

            if(this.state.cur === 7)this.setState({direction:'left'})
            if(this.state.cur === 1)this.setState({direction:'right'})
        }, 500);
    }

    render() {

        return (
            <div className={'slide__banner'}>
                <SimpleImageSlider
                ref = {this.navRef}
                width={"100%"}
                height={260}
                    images={banners}
                />
            </div>
        );
    }
}


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
// }

export default Slide__banner;