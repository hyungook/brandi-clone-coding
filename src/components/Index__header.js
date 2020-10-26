import React from 'react';
import '../style/reset.css';
import '../style/header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import faShoppingCart from '../images/icon/shopping_cart.png';
import searchIcon from '../images/icon/searchIcon.png';
import LOGO from '../images/logo.png';
import Banner from '../images/top__banner_mobile.png';
// import styled from 'styled-components';

class Header extends React.Component{
    render() {

      const menus1 = ["찜", "장바구니", "마이페이지", "로그인", "입점문의"]
      const upperMenu__li = menus1.map((menu) => (<li><a href={'#'}>{menu}</a></li>));

      const menus2 = ["홈", "랭킹", "하루배송", "쇼핑몰 · 마켓", "브랜드", "뷰티", "특가", "기획전", "스토어"]
      const main__nav__li = menus2.map((menu) => (<li><a href={'#'}>{menu}</a></li>));


      return <header>
        <div className={"topBanner"}>
          <img src={Banner} alt={"banner"} />
        </div>
        <section className={'section__top'}>
            <h1 className={"logo"}>
              <a href={'#'}>
                <img src={LOGO} alt={"logo image"}></img>
              </a>
            </h1>
            <div className={'searchBox'}>
                <div className={'searchIcon'}>
                  {/* <FontAwesomeIcon icon={faSearch}/> */}
                    <img src={searchIcon} alt={'shopping cart icon'} />
                </div>
              <form method={"get"} action={'#'}>
                <input type={"text"} className={"searchBtn"}>
                </input>
              </form>
            </div>
            <nav className={"upperMenu"}>
              <div className={'shoppingIcon'}>
                <a href={"#"}>
                  <img src={faShoppingCart} alt={'shopping cart icon'} />
                </a>
              </div>
              <ul className={"upperMenu__ul"}>
                {upperMenu__li}
              </ul>
            </nav>
        </section>
        <section className={'section__bottom'}>
          <ul className={'main__nav'}>
            {main__nav__li}
          </ul>
        </section>

      </header>
    }
  }

  export default Header;