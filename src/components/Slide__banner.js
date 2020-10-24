import React from 'react';
import '../style/reset.css';
import '../style/slideBanner.css';
import Banner from '../images/slideBanner/banner01.png';

class Slide__banner extends React.Component {
    render() {
        return <div className={'slide__banner'}>
            <nav className={'banner__wrap'}>
                <ul className={'banner__wrap__ul'}>
                    <li>
                        <a href={'#'}>
                            <img src={Banner} alt={'banner image'} />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    }
}

export default Slide__banner;