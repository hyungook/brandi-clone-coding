import React from 'react';
import Item from './item__list.js';
import '../style/reset.css';
import '../style/Item__api.css';
import styled from 'styled-components';


const BoxNormal = styled.div`
    width: 100px;
    height: 100px;
    background-color: tomato;
    `;

class Item__api extends React.Component {
    render() {
        return <div className={"item__wrap"}>
        <h1>당신을 위한 추천</h1>
        <BoxNormal></BoxNormal>
        </div>
        
    }
}

export default Item__api;