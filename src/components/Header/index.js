import { React, useEffect, useState, Fragment, lazy } from "react";
import { Row, Col, Drawer, Modal  } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";

import * as S from "./styles";
import Gallery from "../Gallery";
import Bikes from '../Bikes';
import { getBikes } from '../../service/bikes';
import { getGallery } from '../../service/gallery';

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Button= lazy(() => import("../../common/Button"));
const ButtonSecondary = lazy(() => import("../../common/ButtonSecondary"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);  
  const [activeModal, setActiveModal] = useState(null);
  const [bikes, setBikes] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
   let mounted = true;
   getBikes()
     .then(items => {
       if(mounted) {
         setBikes(items)
       }
     })
   return () => mounted = false;
 }, [])

 useEffect(() => {
  let mounted = true;
  getGallery()
    .then(items => {
      if(mounted) {
        setGallery(items)
      }
    })
  return () => mounted = false;
}, [])

  const showModal = (src) => {
    setVisibleModal(true);
    setActiveModal(src)
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
        <S.CustomNavLinkSmall onClick={(event) => showModal('insta')}>
          <S.Span>{t("Gallery")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={(event) => showModal('bikes')}>
          <S.Span>{t("Bikes")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{t("About Us")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("contact")} >
          <S.Span>
            <ButtonSecondary>{t("Contact")}</ButtonSecondary>
          </S.Span>
        </S.CustomNavLinkSmall>
        { activeModal === "insta" &&
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
            <Gallery data={gallery} />
          </Modal>}
          { activeModal === "bikes" &&
          <Modal
            title="Bike Collections"
            visible={visibleModal}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            width={1080}
            footer={[
              <Button key="submit" type="primary" onClick={handleCancel}>
                Back
          </Button>
            ]}
          >
            <Bikes data={bikes}/>
          </Modal>}
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          <S.LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="80px" height="80px" /> 
          </S.LogoContainer>
          <S.SiteName>
            Sri Dhanam Rental
          </S.SiteName>
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
