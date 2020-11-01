import React from 'react';
import '../style/reset.css';
import '../style/slideBanner.css';
// import SimpleImageSlider from "react-simple-image-slider";
import { banners } from "./slide__banner__src";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const url = process.env.PUBLIC_URL + '/assets/slideBanner/';

class Slide__banner extends React.Component {

// 리액트 상태 변화를 통해 rerender 할 수 있도록 수정
// Api 출처 : https://medium.com/how-to-react/create-beautiful-image-sliders-carousels-in-react-using-react-alice-carousel-395d8ae9310c
// Api : https://www.npmjs.com/package/react-alice-carousel


constructor(props){
    super(props)
    this.state = {
        cnt : 0
    }
}

    renew = cnt => {
        if(cnt === 20){
            console.log('!')
            this.setState({
                cnt: this.state.cnt + 1
            })
        }
    }
    

    // renew = cnt => {
    //     if(cnt === 20){
    //         setTimeout(function() {
    //             console.log('!')
    //             console.log(cnt)
    //             this.setState({
    //                 cnt: this.state.cnt + 1
    //             })
    //           }, 1500);       
    //     }
    // }


    // renew = cnt => {
    //     setTimeout(function() {
    //         if(cnt === 20){
    //                 console.log('!')
    //                 console.log(cnt)
    //                 this.setState({
    //                     cnt: this.state.cnt + 1
    //                 })
    //             }
    //     }, 1500);       
    // }

    render() {
        console.log(this.state.cnt)
        return (

            <AliceCarousel key={`${this.state.cnt}`} onSlideChanged={(e)=>{this.renew(e.item)}} autoPlay autoPlayInterval="1500" >
                {banners.map((banners, idx) => {
                    return <img src={`${url+banners["img"]}`} className="sliderimg" alt={`${this.state.cnt}`}/>
                })}
            </AliceCarousel>
        )
}





}

export default Slide__banner;

