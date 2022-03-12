import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <Container fluid>
      <Row className='gridStyle'>
        <Col xs={1} lg='2' className={`sidebar ${menuType && 'reduce-sidebar'}`}>
          {/* <SideMenu params={params} menuType={menuType} handleMenu={this.handleMenu} /> */}
        </Col>
        <Col xs={11} className={`mainPart ${menuType && `extendMainPart`}`}>
          {/* <TopNavbar params={params} setIsOpen={this.setIsOpen} /> */}
          <div className='layout-content'>
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Layout;
