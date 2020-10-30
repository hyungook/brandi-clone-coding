import React from 'react';
import '../style/reset.css';
import '../style/Item__api.css';
// import styled from 'styled-components';
import { item01, item02, item03, item04 } from './item__list';


class Item__api extends React.Component {

    render() {
        const item01__img = item01.map((item) => (<div className={"item__img"}>{item.img}</div>));
        const item01__brand =  item01.map((item) => (<div className={"item__brand"}>{item.brand}</div>));
        const item01__title =  item01.map((item) => (<div className={"item__title"}>{item.title}</div>));
        const item01__sale =  item01.map((item) => (<div className={"item__sale"}>{item.sale}</div>));
        const item01__price =  item01.map((item) => (<div className={"item__price"}>{item.price}</div>));
        const item01__purchase =  item01.map((item) => (<div className={"item__purchase"}>{item.purchase}</div>));

        const item02__img = item02.map((item) => (<div className={"item__img"}>{item.img}</div>));
        const item02__brand =  item02.map((item) => (<div className={"item__brand"}>{item.brand}</div>));
        const item02__title =  item02.map((item) => (<div className={"item__title"}>{item.title}</div>));
        const item02__sale =  item02.map((item) => (<div className={"item__sale"}>{item.sale}</div>));
        const item02__price =  item02.map((item) => (<div className={"item__price"}>{item.price}</div>));
        const item02__purchase =  item02.map((item) => (<div className={"item__purchase"}>{item.purchase}</div>));

        const item03__img = item03.map((item) => (<div className={"item__img"}>{item.img}</div>));
        const item03__brand =  item03.map((item) => (<div className={"item__brand"}>{item.brand}</div>));
        const item03__title =  item03.map((item) => (<div className={"item__title"}>{item.title}</div>));
        const item03__sale =  item03.map((item) => (<div className={"item__sale"}>{item.sale}</div>));
        const item03__price =  item03.map((item) => (<div className={"item__price"}>{item.price}</div>));
        const item03__purchase =  item03.map((item) => (<div className={"item__purchase"}>{item.purchase}</div>));

        const item04__img = item04.map((item) => (<div className={"item__img"}>{item.img}</div>));
        const item04__brand =  item04.map((item) => (<div className={"item__brand"}>{item.brand}</div>));
        const item04__title =  item04.map((item) => (<div className={"item__title"}>{item.title}</div>));
        const item04__sale =  item04.map((item) => (<div className={"item__sale"}>{item.sale}</div>));
        const item04__price =  item04.map((item) => (<div className={"item__price"}>{item.price}</div>));
        const item04__purchase =  item04.map((item) => (<div className={"item__purchase"}>{item.purchase}</div>));

        return <div className={"item__wrap"}>
        <h1>당신을 위한 추천</h1>
        <sectoin className={"item__section"}>
            <ul className={"item__section__ul"}>
                <li>
                    {item01__img} {item01__brand} {item01__title} {item01__sale}
                    {item01__price} {item01__purchase}
                </li>
                <li>
                    {item02__img} {item02__brand} {item02__title} {item02__sale}
                    {item02__price} {item02__purchase}
                </li>
                <li>
                    {item03__img} {item03__brand} {item03__title} {item03__sale}
                    {item03__price} {item03__purchase}
                </li>
                <li>
                    {item04__img} {item04__brand} {item04__title} {item04__sale}
                    {item04__price} {item04__purchase}
                </li>
                
            </ul>
        </sectoin>
        </div>
        
    }
}

export default Item__api;