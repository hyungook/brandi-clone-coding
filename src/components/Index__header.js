import React from 'react';
import '../style/reset.css';
// import '../style/header.css';
import faShoppingCart from '../images/icon/shopping_cart.png';
import searchIcon from '../images/icon/searchIcon.png';
import LOGO from '../images/logo.png';
import Banner_mobile from '../images/top__banner_mobile.png';
import Banner from '../images/top__banner.png';
import styled from 'styled-components';
import { MainHeader, TopBanner, Section__top, Main__logo,
  SectionBox, SearchIcon, SearchIconImg, SearchBox__form,
  SearchBtn, ShoppingIcon, ShoppingIcon__a, ShoppingIcon__img, UpperMenu,
  UpperMenu__ul, UpperMenu__ul__li, UpperMenu__ul__li__a, Section__bottom, Main__nav, Main__nav__li, Main__nav__li__a  } from './Index__header__styled.js';


  // let topBanner;
  // const url = process.env.PUBLIC_URL + '/assets/';
  // let windowInnerWindth = window.innerWidth;

  // window.addEventListener('resize', () => {
  //   console.log(windowInnerWindth);
  //     if(windowInnerWindth >= 768) {
  //       let topBanner = 'top__banner.png';
  //       return topBanner;
  //       console.log(topBanner);
  //     } else {
  //       let topBanner = 'top__banner_mobile.png';
  //       return topBanner;
  //       console.log(topBanner);
  //     }
  // })

// let bannerImg = document.querySelector('.topBanner');
//   window.addEventListener('resize', () => {
//     // bannerImg.src = `${Banner}`;
//   })


// var mql = window.matchMedia("screen and (max-width: 768px)");
// window.addEventListener('load', () => {
//   if (mql.matches) {
//       console.log("화면의 너비가 768px 보다 작습니다.");
//       // bannerImg.src = Banner_mobile;
//   } else {
//       console.log("화면의 너비가 768px 보다 큽니다.");
//       // bannerImg.src = Banner;
//   }
// })
      



class Header extends React.Component{
    render() {

      const menus1 = ["찜", "장바구니", "마이페이지", "로그인", "입점문의"]
      const upperMenu__li = menus1.map((menu) => (<UpperMenu__ul__li><UpperMenu__ul__li__a href={'#'}>{menu}</UpperMenu__ul__li__a></UpperMenu__ul__li>));

      const menus2 = ["홈", "랭킹", "하루배송", "쇼핑몰 · 마켓", "브랜드", "뷰티", "특가", "기획전", "스토어"]
      const main__nav__li = menus2.map((menu) => (<Main__nav__li><Main__nav__li__a  href={'#'}>{menu}</Main__nav__li__a ></Main__nav__li>));

      return <MainHeader>
        <TopBanner>
          {/* <img src={`${url+topBanner}`} alt={"banner"} className={"topBanner"} /> */}
          {/* <img src={Banner_mobile} alt={"banner"} className={"topBanner"} /> */}
          {/* <img src={Banner} alt={"banner"} className={"topBanner"} /> */}
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

            <UpperMenu>
              <ShoppingIcon>
                <ShoppingIcon__a href={"#"}>
                  <ShoppingIcon__img src={faShoppingCart} alt={'shopping cart icon'} />
                </ShoppingIcon__a>
              </ShoppingIcon>
              <UpperMenu__ul>
                {upperMenu__li}
              </UpperMenu__ul>
            </UpperMenu>

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