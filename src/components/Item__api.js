import React from 'react';
import Item from './item__list.js';
import '../style/reset.css';
import '../style/Item__api.css';
import styled from 'styled-components';
// import { itme01 } from './item__list';


const BoxNormal = styled.section`
    width: 100px;
    height: 100px;
    background-color: tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    `;

const BoxBtn = styled.button`
    width: 80px;
    height: 40px;
    background-color: white;
    cursor: pointer;
`;

class Item__api extends React.Component {

    render() {
        const item01 = [
            { img : "",
            title : "라우드",
            sale: "20%",
            price: "45,500",
            purchase: "12개 구매중", 
        },
        ]

        const item1 =  item01.map((item) => (<div>{item.title}</div>));
        const item1_1 =  item01.map((item) => (<div>{item.sale}</div>));
        const item1_2 =  item01.map((item) => (<div>{item.price}</div>));
        const item1_3 =  item01.map((item) => (<div>{item.purchase}</div>));

        return <div className={"item__wrap"}>
        <h1>당신을 위한 추천</h1>
        <BoxNormal>
    <BoxBtn>{item1} {item1_1} {item1_2} {item1_3}</BoxBtn>
        </BoxNormal>
        </div>
        
    }
}

export default Item__api;