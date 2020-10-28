import React from 'react';
import '../style/reset.css';
import '../style/header.css';
import faShoppingCart from '../images/icon/shopping_cart.png';
import searchIcon from '../images/icon/searchIcon.png';
import LOGO from '../images/logo.png';
import Banner from '../images/top__banner_mobile.png';
import styled from 'styled-components';
import { MainHeader, TopBanner, Section__top, Main__logo,
  SectionBox, SearchIcon, SearchIconImg, SearchBox__form,
  SearchBtn, ShoppingIcon, ShoppingIcon__a, ShoppingIcon__img,
  UpperMenu__ul, Section__bottom, Main__nav } from './Index__header__styled.js';

class Header extends React.Component{
    render() {

      const menus1 = ["찜", "장바구니", "마이페이지", "로그인", "입점문의"]
      const upperMenu__li = menus1.map((menu) => (<li><a href={'#'}>{menu}</a></li>));

      const menus2 = ["홈", "랭킹", "하루배송", "쇼핑몰 · 마켓", "브랜드", "뷰티", "특가", "기획전", "스토어"]
      const main__nav__li = menus2.map((menu) => (<li><a href={'#'}>{menu}</a></li>));


      return <MainHeader>
        <TopBanner>
          <img src={Banner} alt={"banner"} />
        </TopBanner>
        <Section__top>
            <Main__logo>
              <a href={'#'}>
                <img src={LOGO} alt={"logo image"}></img>
              </a>
            </Main__logo>
            <SectionBox>
                <SearchIcon>
                    <SearchIconImg src={searchIcon} alt={'shopping cart icon'} />
                </SearchIcon>
              <SearchBox__form method={"get"} action={'#'}>
                <SearchBtn type={"text"}>
                </SearchBtn>
              </SearchBox__form>
            </SectionBox>
            <nav className={"upperMenu"}>
              <ShoppingIcon>
                <ShoppingIcon__a href={"#"}>
                  <ShoppingIcon__img src={faShoppingCart} alt={'shopping cart icon'} />
                </ShoppingIcon__a>
              </ShoppingIcon>
              <UpperMenu__ul>
                {upperMenu__li}
              </UpperMenu__ul>
            </nav>
        </Section__top>
        <Section__bottom>
          <Main__nav className={"main__nav"}>
            {main__nav__li}
          </Main__nav>
        </Section__bottom>

      </MainHeader>
    }
  }

  export default Header;