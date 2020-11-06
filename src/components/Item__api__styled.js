import React from 'react';
import styled from 'styled-components';


export const Item__wrap = styled.div`
    padding: 0 6px;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

`;
export const Item__wrap__h1 = styled.h1`
    padding: 1rem 8px;
    font-size: 1.2rem;
    letter-spacing: -0.2px;
    font-weight: 900;

    @media only screen and (min-width: 768px) {
        margin: 40px 0 30px 0;
        font-size: 1.8rem;
        letter-spacing: -0.2px;
        font-weight: 900;
    }
`;
export const Item__section = styled.section`
    width: 100%;

    @media only screen and (min-width: 768px) {
        max-width: 1200px;
        box-sizing: border-box;
    }
`;
export const Item__section__ul = styled.ul`
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: auto;
    margin-bottom: 20px;
`;
export const Item__section__li = styled.li`
    position: relative;
    width: 50%;
    padding: 0 4px;
    margin-bottom: 20px;

    @media only screen and (min-width: 768px) {
        position: relative;
        width: 20%;
        padding: 0 8px;
        margin-bottom: 20px;
    }
`;
export const Item__li__a = styled.a`
    text-decoration: none;
    color: #000000;
`;
export const Item__img = styled.div`
    width: 100%;
    height: 220px;
    border-radius: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #ddd;

    @media only screen and (min-width: 768px) {
        height: 260px;
    }

`;
export const Item__img__img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`;
export const Item__brand = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
`;
export const Item__title = styled.div`
    width: 100%;
    font-size: 14px;
    color: #4a4a4a;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    overflow: hidden;
    margin-bottom: 4px;
`;
export const Item__sale = styled.div`
    display: inline-block;
    font-weight: 700;
    color: var(--color-red);
    margin-right: 4px;
`;
export const Item__price = styled.div`
    display: inline-block;
    font-weight: 700;
    margin-right: 6px;
    color: #000;
`;
export const Item__costPrice = styled.div`
    display: inline-block;
    font-size: 14px;
    color: #757575;
    text-decoration: line-through;
`;
export const Item__purchase = styled.div`
    margin-top: 8px;
    font-size: 12px;
    color: #757575;
`;
export const Middle__banner = styled.div`
    margin-bottom: 40px;

    @media only screen and (min-width: 768px) {
        margin-bottom: 80px;
    }
`;