import { Row, Col, Modal } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";

import * as S from "./styles";

const RightBlock = ({ title, content, button, icon, t, id }) => {

  function success() {
    Modal.info({
      content: (
      <div>
        <p>You are being redirect to our payment gateway. Upfront of INR 1000 will be collected for booking</p>
        <p><small>NOTE : Upfront payment is a token advance for the online prebooking to avoid fake bookings. Actual rental amount will vary depending on the 
          bike price and number of days.</small></p>
      </div>),
      onOk() {
          // if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          //   window.open('tel:918489386058','_blank');
          // }
          window.open('https://www.payumoney.com/paybypayumoney/#/5AAAB1220B6518D5E8C00F6253B5CFEF','_blank');          
      },
    });

  }

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
 
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => item.title === "Services" ? scrollTo("about") : success()}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>

            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
