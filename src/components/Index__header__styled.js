import React from 'react';
import styled from 'styled-components';

export const MainHeader = styled.header`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`;
export const TopBanner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
`;
export const Section__top = styled.section`
    width: 100%;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
`;
export const Main__logo = styled.h1`
    max-width: 150px;
    width: 25%;
    padding-right: 10px;
    cursor: pointer;
`;
export const SectionBox = styled.div`
    width: 60%;
    position: relative;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4rem;
    background-color: #eeeeee;
`;
export const SearchIcon = styled.div`
    width: 38px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    box-sizing: border-box;
`;
export const SearchIconImg = styled.img`
    max-width: 38px;
    width: 64%;
`;
export const SearchBox__form = styled.form`
    width: 86%;
    height: 30px;
    position: relative;
    display: flex;
    border-radius: 4rem;
`;
export const SearchBtn = styled.input`
    width: 100%;
    padding: 4px 10px 4px 0;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 4rem;
    background-color: #eeeeee;
`;
export const ShoppingIcon = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
`;
export const ShoppingIcon__a  = styled.a`
    width: 100%;
    height: 100%;
`;
export const ShoppingIcon__img = styled.img`
    text-align: center;
`;
export const UpperMenu__ul = styled.ul`
    display: none;
`;
export const Section__bottom = styled.section`
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
`;
export const Main__nav = styled.ul`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: left;
    text-align: center;
    overflow-x: auto;
    transition-duration: 0ms;
    transform: translate3d(0px, 0, 0);
    box-sizing: content-box;

    ::-webkit-scrollbar {
        display: none;
      }
`;

export const Main__nav__li = styled.li`
    width: auto;
    height: 50px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 28px;
    box-sizing: border-box;

    ::after {
        content: "";
        width: 0;
        height: 3px;
        display: inline-block;
        background: var(--color-red);
        transition: all 0.3s;
      }

    :hover::after {
        width: 100%;
        background: var(--color-red);
        transition: all 0.3s;
    }

    :focus::after {
        width: 100%;
        background: var(--color-red);
        transition: all 0.3s;
    }

`;
export const Main__nav__li__a = styled.li`
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.05em;
    text-align: center;
    color: var(--color-black);
    text-decoration: none;

    margin: auto 0;
`;
