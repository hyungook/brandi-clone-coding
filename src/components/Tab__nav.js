import React from 'react';
import '../style/reset.css';
import '../style/tabNav.css';

// 이미지 경로 지정
const url = process.env.PUBLIC_URL + '/assets/icon/';


function onChange(e) {
    const btn__ul = document.querySelectorAll('.nav__ul');
    const home = document.querySelector('.home__btn');
    const truck = document.querySelector('.truck__btn');
    const category = document.querySelector('.category__btn');
    const heart = document.querySelector('.heart__btn');
    const my = document.querySelector('.my__btn');
    console.log(e.target.className);

    home.src = `${url}home1.png`;
    truck.src = `${url}truck1.png`;
    category.src = `${url}category1.png`;
    heart.src = `${url}heart1.png`;
    my.src = `${url}my1.png`;

    if(e.target.className == "home__btn") {
        console.log(e.target.src);
        home.src = `${url}home2.png`;
    } else if(e.target.className == "truck__btn") {
        console.log(e.target.src);
        truck.src = `${url}truck2.png`;
    } else if(e.target.className == "category__btn") {
        console.log(e.target.src);
        category.src = `${url}category2.png`;
    } else if(e.target.className == "heart__btn") {
        console.log(e.target.src);
        heart.src = `${url}heart2.png`;
    } else if(e.target.className == "my__btn") {
        console.log(e.target.src);
        my.src = `${url}my2.png`;
    }
}

class Tab__nav extends React.Component {    
    render() {
        return <div className={"nav__wrap"}>
            <ul className={"nav__ul"}>
                <li className={'homeBtn btn'}>
                    <a href={"#"}>
                        {/* <img src={home2} alt={'icon'} className={"home__btn"}/> */}
                        <img src={`${url}home2.png`} alt={'icon'} className={"home__btn"} onClick={onChange}/>
                    </a>
                </li>
                <li className={'truckBtn btn'}>
                    <a href={"#"} className={""}>
                        <img src={`${url}truck1.png`} alt={'icon'} className={"truck__btn"} onClick={onChange}/>
                    </a>
                </li>
                <li className={'categoryBtn btn'}>
                    <a href={"#"} className={""}>
                        <img src={`${url}category1.png`} alt={'icon'} className={"category__btn"} onClick={onChange}/>
                    </a>
                </li>
                <li className={'heartBtn btn'}>
                    <a href={"#"} className={""}>
                        <img src={`${url}heart1.png`} alt={'icon'} className={"heart__btn"} onClick={onChange}/>
                    </a>
                </li>
                <li className={'myBtn btn'}>
                    <a href={"#"} className={""}>
                        <img src={`${url}my1.png`} alt={'icon'} className={"my__btn"} onClick={onChange}/>
                    </a>
                </li>
            </ul>
        </div>
    }
}

export default Tab__nav;