import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu';
// import TopNavbar from '../TopNavbar';

function Layout() {
  return (
    <Container fluid>
      <Row className='gridStyle'>
        <Col xs={1} lg='2' className={`sidebar`}>
          <SideMenu />
        </Col>
        <Col xs={11} className={`mainPart`}>
          {/* <TopNavbar /> */}
          <div className='layout-content'>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
