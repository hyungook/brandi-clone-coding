import React from 'react';
import '../style/reset.css';
import '../style/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import faShoppingCart from '../images/shopping_cart.png';
import LOGO from '../images/logo.png';
import Banner from '../images/top__banner_mobile.png';

class Header extends React.Component{
    render() {
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
                  <FontAwesomeIcon icon={faSearch}/>
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
                <li>
                  <a href={"#"}>찜</a>
                </li>
                <li>
                  <a href={"#"}>장바구니</a>
                </li>
                <li>
                  <a href={"#"}>마이페이지</a>
                </li>
                <li>
                  <a href={"#"}>로그인</a>
                </li>
                <li>
                  <a href={"#"}>입점문의</a>
                </li>
              </ul>
            </nav>
        </section>
        <section className={'section__bottom'}>
          <ul className={'main__nav'}>
            <li>
              <a href={'#'}>홈!</a>
            </li>
            <li>
              <a href={'#'}>랭킹</a>
            </li>
            <li>
              <a href={'#'}>하루배송</a>
            </li>
            <li>
              <a href={'#'}>쇼핑몰 · 마켓</a>
            </li>
            <li>
              <a href={'#'}>브랜드</a>
            </li>
            <li>
              <a href={'#'}>뷰티</a>
            </li>
            <li>
              <a href={'#'}>특가</a>
            </li>
            <li>
              <a href={'#'}>기획전</a>
            </li>
            <li>
              <a href={'#'}>스토어</a>
            </li>
          </ul>
        </section>

      </header>
    }
  }

  export default Header;