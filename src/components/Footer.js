import React from 'react';
import '../style/reset.css';
import '../style/footer.css';
import Facebook from '../images/icon/icon_facebook.png';
import Instagram from '../images/icon/icon_instagram.png';


class Footer extends React.Component {

    render() {
        return<footer className={"footer"}>
            <div className={"footer__section footer__1 hidden"}>
                <strong>브랜디 고객센터</strong>
                <p>㈜브랜디는 중개서비스 제공 또는 통신판매중개시스템의 제공자로서 상품의 주문 및 배송 환불 등에 대해서는 각 판매자에게 확인하셔야 빠른 답변을 받으실 수 있습니다.</p>
            </div>
            <div className={"footer__section footer__1"}>
                <div className={"footer__1__left"}>
                    <strong>고객센터 1566-6575</strong>
                    <p>영업시간 : AM 10:00 ~ PM 17:00 (주말 및 공휴일 휴무)</p>
                    <p>점심시간 : PM 12:30 ~ PM 13:30</p>
                </div>
                <div className={"footer__1__right"}>
                    <ul>
                        <li>
                            <img src={""} alt={"icon"}></img>
                            <p>자주 묻는 질문</p>
                        </li>
                        <li>
                            <img src={""} alt={"icon"}></img>
                            <p>카톡 플러스 친구</p>
                        </li>
                        <li>
                            <img src={""} alt={"icon"}></img>
                            <p>페이스북</p>
                        </li>
                        <li>
                            <img src={""} alt={"icon"}></img>
                            <p>인스타그램</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={"footer__section footer__2"}>
                <p>회사명 : ㈜브랜디 | 대표이사 : 서정민</p>
                <p>사업자등록번호 : 220-88-93187</p>
                <p>통신판매업신고 : 2016-서울강남-00359</p>
                <p>개인정보관리책임 : 윤석호(privacy@brandi.co.kr)</p>
                <p>주소 : 서울특별시 강남구 테헤란로 32길 26 청송빌딩(우 : 06223)</p>
                <p>고객센터 : 1566-6575</p>
            </div>
            <div className={"footer__section footer__3"}>
                <p>법적고지</p>
                <p>㈜브랜디는 결제정보의 중개서비스 또는 통신판매중개시스템의 제공자로서, 통신판매의 당사자가 아니며 상품의 주문, 배송 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.</p>
                <p>BRANDI INC. ALL RIGHT RESERVED</p>
            </div>
            <div className={"footer__section footer__4"}>
                <div className={"footer__link"}>
                    <a href={"#"}>이용약관</a>
                    <a href={"#"}>개인정보처리방침</a>
                    <a href={"#"}>사업자정보확인</a>
                </div>
                <div className={"footer__sns"}>
                    <a href={"#"}><img src={Facebook} alt={"facebook icon"} className={"snsIcon"}/></a>
                    <a href={"#"}><img src={Instagram} alt={"instagram icon"} className={"snsIcon"}/></a>
                </div>
            </div>
        </footer>
    }

}

export default Footer;