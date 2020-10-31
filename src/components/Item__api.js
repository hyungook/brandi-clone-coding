import React from 'react';
import '../style/reset.css';
import '../style/Item__api.css';
// import styled from 'styled-components';
import { item } from './item__list';


// 정적파일 경로에 접근하는 시스템 변수 
const url = process.env.PUBLIC_URL + '/assets/item_thumnail/'

class Item__api extends React.Component {
    render() {

        return <div className={"item__wrap"}>
        <h1>당신을 위한 추천</h1>
        <sectoin className={"item__section"}>
            <ul className={"item__section__ul"}>

                {item.map((item, idx) => {
                    return <li><a href={item["url"]} target={"blank"}>
                        <div className={"item__img"}>
                            <img src={`${url+item["img"]}`} alt={item.alt}></img>
                        </div>
                        <div className={"item__brand"}>{item["brand"]}</div>
                        <div className={"item__title"}>{item["title"]}</div>
                        <div className={"item__sale"}>{item["sale"]}</div>
                        <div className={"item__price"}>{item["price"]}</div>
                        <div className={"item__costPrice"}>{item["costPrice"]}</div>
                        <div className={"item__purchase"}>{item["purchase"]}</div>
                        </a></li>
                })}

                {/* {item.map((i, idx)=>{
                    return <li className="potato">
                        <img style={{}} src={item.img}></img>
                    </li>
                })} */}


            </ul>
        </sectoin>
        </div>
        
    }
}

export default Item__api;