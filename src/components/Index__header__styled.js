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
    object-fit: cover;

    @media only screen and (min-width: 768px) {
        max-height: 60px;
        object-fit: cover;
      }
`;
export const Section__top = styled.section`
    width: 100%;
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    @media only screen and (min-width: 768px) {
        max-width: 1300px;
        padding: 38px 100px;
      }
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

    @media only screen and (min-width: 768px) {
        width: 44%;
      }


`;
export const SearchIcon = styled.div`
    width: 38px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    box-sizing: border-box;

    @media only screen and (min-width: 768px) {
        width: 12%;
        height: 40px;
      }

`;
export const SearchIconImg = styled.img`
    max-width: 38px;
    width: 64%;

    @media only screen and (min-width: 768px) {
        // width: 80%;
        width: 20px;
      }
`;
export const SearchBox__form = styled.form`
    width: 86%;
    height: 30px;
    position: relative;
    display: flex;
    border-radius: 4rem;

    @media only screen and (min-width: 768px) {
        width: 88%;
        height: 40px;
      }

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

    @media only screen and (min-width: 768px) {
        display: none;
      }
`;

export const UpperMenu = styled.nav`
    display: flex;
    justify-content: left;
    align-items: center;
`;

export const UpperMenu__ul = styled.ul`
    display: none;

    @media only screen and (min-width: 768px) {
        display: flex;
        text-decoration: none;
        // background-color: #ddd;
      }
`;

export const UpperMenu__ul__li = styled.li`
        text-decoration: none;
        // margin-right: 8px;

        ::after {
            float:left;
            display: inline-block;
            content: " ㅣ ";
        }

        :first-child::after {
            content: "";
        }
`;

export const UpperMenu__ul__li__a = styled.a`
        text-decoration: none;
        color: #000;
        font-size: 14px;
`;

export const Section__bottom = styled.section`
    width: 100%;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #ddd;


    @media only screen and (min-width: 768px) {
      justify-content: center;
    }
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

      @media only screen and (min-width: 768px) {
        max-width: 1100px;
        justify-content: space-around;
      }
`;

export const Main__nav__li = styled.li`
    width: auto;
    height: 60px;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 28px;
    box-sizing: border-box;

    :hover {
        color: #FF204B;
        cursor: pointer;
    }

    ::after {
        content: "";
        width: 0;
        height: 3px;
        display: inline-block;
        background: #FF204B;
        transition: all 0.3s;
      }

    :hover::after {
        width: 100%;
        background: color: #FF204B;
        transition: all 0.3s;
    }

    :focus::after {
        width: 100%;
        background: #FF204B;
        transition: all 0.3s;
    }
    
    @media only screen and (min-width: 768px) {
        min-width: 11.1%;
        margin-right: 0;
    }

`;
export const Main__nav__li__a = styled.a`
    font-size: 13px;
    font-weight: 700;
    letter-spacing: -0.05em;
    text-align: center;
    color: var(--color-black);
    text-decoration: none;

    margin: auto 0;

    :hover {
        color: #FF204B;
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        height: 100%;
        font-size: 1rem;
        padding: 10px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

`;
