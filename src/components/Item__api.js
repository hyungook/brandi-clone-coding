import React from 'react';
import '../style/reset.css';
// import '../style/Item__api.css';
import { item } from './item__list';
import styled from 'styled-components';
import { Item__wrap, Item__wrap__h1, Item__section, Item__section__ul, Item__section__li, Item__li__a,
Item__img, Item__img__img, Item__brand, Item__title, Item__sale, Item__price, Item__costPrice, 
Item__purchase, Middle__banner } from './Item__api__styled';


// 정적파일 경로에 접근하는 시스템 변수 
const url = process.env.PUBLIC_URL + '/assets/item_thumnail/';
const banner = process.env.PUBLIC_URL + '/assets/slideBanner/';


class Item__api extends React.Component {

    componentDidMount() {
        console.log("hhh")
    }

    render() {

        return <Item__wrap>
        <Item__wrap__h1>당신을 위한 추천</Item__wrap__h1>
        <Item__section className={"item__section"}>
            <Item__section__ul className={"item__section__ul"}>

                {/* {item.map((item, idx) => {
                    // 조건문을 활용하여 필터 기능 가능
                    return item.brand !== "에이비글" && <li><a href={item["url"]} target={"blank"}>
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
                })} */}


                {/* 스텝, 1단계 ex 20개 등등 */}


                {item.map((item, idx) => {
                    return <Item__section__li><Item__li__a href={item["url"]} target={"blank"}>
                        <Item__img className={"item__img"}>
                            <Item__img__img src={`${url+item["img"]}`} alt={item.alt}></Item__img__img>
                        </Item__img>
                        <Item__brand className={"item__brand"}>{item["brand"]}</Item__brand>
                        <Item__title className={"item__title"}>{item["title"]}</Item__title>
                        <Item__sale className={"item__sale"}>{item["sale"]}</Item__sale>
                        <Item__price className={"item__price"}>{item["price"]}</Item__price>
                        <Item__costPrice className={"item__costPrice"}>{item["costPrice"]}</Item__costPrice>
                        <Item__purchase className={"item__purchase"}>{item["purchase"]}</Item__purchase>
                        </Item__li__a></Item__section__li>
                })}
                {/* {item.map((i, idx)=>{
                    return <li className="potato">
                        <img style={{}} src={item.img}></img>
                    </li>
                })} */}
            </Item__section__ul>

            <Middle__banner className={"banner"} alt={"banner image"}>
                <img src={`${banner}banner15.png`} alt={item.alt}></img>
            </Middle__banner>

            <Item__section__ul className={"item__section__ul"}>
                {item.map((item, idx) => {
                    return <Item__section__li><Item__li__a href={item["url"]} target={"blank"}>
                        <Item__img className={"item__img"}>
                            <Item__img__img src={`${url+item["img"]}`} alt={item.alt}></Item__img__img>
                        </Item__img>
                        <Item__brand className={"item__brand"}>{item["brand"]}</Item__brand>
                        <Item__title className={"item__title"}>{item["title"]}</Item__title>
                        <Item__sale className={"item__sale"}>{item["sale"]}</Item__sale>
                        <Item__price className={"item__price"}>{item["price"]}</Item__price>
                        <Item__costPrice className={"item__costPrice"}>{item["costPrice"]}</Item__costPrice>
                        <Item__purchase className={"item__purchase"}>{item["purchase"]}</Item__purchase>
                        </Item__li__a></Item__section__li>
                })}
            </Item__section__ul>
        </Item__section>
    </Item__wrap>
        
    }
}

export default Item__api;