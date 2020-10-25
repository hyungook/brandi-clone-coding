import React from 'react';
import '../style/reset.css';
import '../style/tabNav.css';
import home1 from '../images/icon/home1.png';
import home2 from '../images/icon/home2.png';
import truck1 from '../images/icon/truck1.png';
import caregory1 from '../images/icon/caregory1.png';
import heart1 from '../images/icon/heart1.png';
import my1 from '../images/icon/my1.png';

class Tab__nav extends React.Component {
    render() {
        return <div className={"nav__wrap"}>
            <ul className={"nav__ul"}>
                <li className={'on'}>
                    <a href={"#"} className={'on'}>
                        <img src={home2} alt={'icon'} />
                    </a>
                </li>
                <li>
                    <a href={"#"}>
                        <img src={truck1} alt={'icon'} />
                    </a>
                </li>
                <li>
                    <a href={"#"}>
                        <img src={caregory1} alt={'icon'} />
                    </a>
                </li>
                <li>
                    <a href={"#"}>
                        <img src={heart1} alt={'icon'} />
                    </a>
                </li>
                <li>
                    <a href={"#"}>
                        <img src={my1} alt={'icon'} />
                    </a>
                </li>
            </ul>
        </div>
    }
}

export default Tab__nav;