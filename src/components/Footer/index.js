import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  // const SocialLink = ({ href, src }) => {
  //   return (
  //     <a
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       key={src}
  //       aria-label={src}
  //     >
  //       <SvgIcon src={src} width="25px" height="25px" />
  //     </a>
  //   );
  // };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("Contact")}</S.Language>
                <S.Large to="/">{t("Tell us about you")}</S.Large>
                <S.Para>
                  {t(
                    `Do you have any question or issues regarding the webapp? Feel free to reach out.`
                  )}
                </S.Para>
                <a href="https://wa.me/918489386058" target="_blank" rel="noreferrer">
                  <S.Chat>{t(`Let's Chat`)} on Whatsapp</S.Chat>
                </a>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Terms & Conditions")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Bike and Car rental")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Guide and Accommodation")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Empty />
                <S.Large left="true" to="/">
                  {t("Support Center")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Customer Support")}
                </S.Large>
              </Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t("ADDRESS")}</S.Language>                 
                <S.Para>Sri Dhanam Rental</S.Para>
                <S.Para>No.13, Ayyanar Koil St, behind new bus stand,</S.Para>
                <S.Para>Iyyanar Nagar, Raja Nagar, </S.Para>
                <S.Para>Pudupalaiyam, Puducherry, 605005</S.Para>
                <S.Para>shridhanamrentals@gmail.com</S.Para>
                <S.Para>+91 84893 86058</S.Para>
                <a href="https://www.google.com/maps/place/Sri+Dhanam+Bike+Rental/@11.9341701,79.8154068,15z/data=!4m5!3m4!1s0x0:0xc7619947d75c2d29!8m2!3d11.9341701!4d79.8154068" target="_blank" rel="noreferrer">
                <S.Chat>Find on Goole Map</S.Chat>
                </a>                  
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>{t("Company")}</S.Title>
                <S.Large left="true" to="/">
                  {t("About")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Blog")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Press")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Careers & Culture")}
                </S.Large>
              </Col>
              <Col lg={6} md={6} sm={12} xs={24}>
                <S.Select>
                  <S.Label htmlFor="select-lang">{t("Language")}</S.Label>
                  <S.LangSelect
                    onChange={handleChange}
                    value={i18n.language}
                    id="select-lang"
                  >
                    <option value="en">English</option>
                    <option value="es">Español</option>
                  </S.LangSelect>
                </S.Select>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/">
                <S.LogoContainer>
                  <SvgIcon
                    src="logof.png"
                    aria-label="homepage"
                    width="64px"
                    height="64px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <p>&#169; 2021 Dhanam Rental Ver 1.0 - Developed by <a href="http://manogajapathi.com" target="_blank" rel="noreferrer" >Manogajapathi</a></p>
                {/* <SocialLink
                  href="https://github.com/Adrinlol/create-react-app-adrinlol"
                  src="github.svg"
                /> */}
                {/* <SocialLink
                  href="https://twitter.com/Adrinlolx"
                  src="twitter.svg"
                /> */}
                {/* <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="linkedin.svg"
                /> */}
                {/* <SocialLink
                  href="https://github.com/Adrinlol/"
                  src="instagram.svg"
                /> */}
                {/* <SocialLink
                  href="https://medium.com/@lashakakabadze/"
                  src="medium.svg"
                /> */}
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
