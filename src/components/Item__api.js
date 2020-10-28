import React from 'react';
import Item from './item__list.js';
import '../style/reset.css';
import '../style/Item__api.css';
import styled from 'styled-components';


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
        return <div className={"item__wrap"}>
        <h1>당신을 위한 추천</h1>
        <BoxNormal>
            <BoxBtn>hello</BoxBtn>
        </BoxNormal>
        </div>
        
    }
}

export default Item__api;