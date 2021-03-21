import { useState, Fragment, lazy } from "react";
import { Row, Col, Drawer, Modal  } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";

import * as S from "./styles";
import Gallery from "../Gallery";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button= lazy(() => import("../../common/Button"));
const ButtonSecondary = lazy(() => import("../../common/ButtonSecondary"));

const data = [{
	id: 1,
	name: "RC",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/83618487_195490928170359_3608858069781174331_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=hr8ikbf-G6UAX_QzWac&ccb=7-4&oh=572a2370421b07073eb0b35f30ee2c60&oe=607DEA84&_nc_sid=86f79a"
}, {
	id: 2,
	name: "Vespa",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/157886614_276218097370983_7769228958739801647_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=PJO6PvE9ckcAX8wZDlY&ccb=7-4&oh=42684b8a1c32c07465a1a365f28b384c&oe=607FE706&_nc_sid=86f79a"
}, {
	id: 3,
	name: "RC-race",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/88183140_234361580924809_5115578094421518249_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=e883sLwMcW4AX9-D-gO&ccb=7-4&oh=8d8a8efdc7aa473b70f39d13a527e8c2&oe=608003F5&_nc_sid=86f79a"
}, {
	id: 4,
	name: "RC-2",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/143609237_197852565417000_5654479803720486000_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=eCV4YYELUkUAX_CJSHI&ccb=7-4&oh=9bb9f73b058602d1202b4c2fab4248f9&oe=607E4BC2&_nc_sid=86f79a"
}, {
	id: 5,
	name: "Pondy-view",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/87788643_695577244310439_242573490230747948_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=zHqXR9naKPoAX_6j1j9&ccb=7-4&oh=9dbf7a5c1cfbcc5f54dd32e748231566&oe=607E645D&_nc_sid=86f79a"
}, {
	id: 6,
	name: "Pondy-beach",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/84564314_202758917479167_3133140505295407542_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=TibpqnEO4PMAX8LJtWn&ccb=7-4&oh=ae9d89f8a742e0104abeb1139fdeaa78&oe=607D68A8&_nc_sid=86f79a"
}, {
	id: 7,
	name: "Vespa",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/87616756_124111319154000_4129393576738140150_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=in_KDYqlV6sAX9JLcG6&ccb=7-4&oh=965f3d25870d4f6935780968cd283f4e&oe=607FFF67&_nc_sid=86f79a"
}, {
	id: 8,
	name: "Bullet",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/103431321_571659383492975_7193942425302856276_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=0ZN-CP1qrAkAX9a7aKW&ccb=7-4&oh=569674380ae887d7b7cfee053407c9c7&oe=607D539F&_nc_sid=86f79a"
}, {
	id: 9,
	name: "Racer",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/103508728_144227140564706_2370103552550646019_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=sdwZhLwmSIMAX-KUxez&ccb=7-4&oh=ba13c60f7fcc7f157f650175336f229c&oe=607E483D&_nc_sid=86f79a"
}, {
	id: 10,
	name: "360",
	image: "https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.2885-15/e35/100931355_283842082805339_2800864638438995911_n.jpg?tp=1&_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=HVkGzBpuJasAX_tWlKa&tn=9BzFwG0DfSAuQ-EP&ccb=7-4&oh=51dd93c2d5ad3c9bce216872ba3bbcdb&oe=60809ED8&_nc_sid=86f79a"
}];

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisibleModal(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisibleModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisibleModal(false);
  };

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const redirectInsta = () => {
    window.open('https://www.instagram.com/dhanamrental/', '_blank')
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={showModal}>
          <S.Span>{t("Gallery")}</S.Span>
        </S.CustomNavLinkSmall>
        <Modal
        title="Instagram Gallery"
        visible={visibleModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1080}
        footer={[
          <Button key="submit" type="primary" onClick={redirectInsta}>
            Follow on Instagram
          </Button>
        ]}
      >
        <p><Gallery data={data}/></p>
      </Modal>
        <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <S.Span>{t("Bikes")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{t("About Us")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          onClick={() => scrollTo("contact")}
        >
          <S.Span>
            <ButtonSecondary>{t("Contact")}</ButtonSecondary>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/home" aria-label="homepage">
            <SvgIcon src="logo.png" width="80px" height="80px" />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
