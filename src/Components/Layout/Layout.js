import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu';
import TopNavbar from '../TopNavbar';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, menuType: true, loading: true };
  }
  render() {
    const { loading, menuType } = this.state;
    return (
      <div>
        {loading ? (
          <Container fluid>
            <Row className='gridStyle'>
              <Col xs={1} lg='2' className={`sidebar ${menuType && 'reduce-sidebar'}`}>
                <SideMenu menuType={menuType} handleMenu={this.handleMenu} />
              </Col>
              <Col xs={11} className={`mainPart ${menuType && `extendMainPart`}`}>
                <TopNavbar setIsOpen={this.setIsOpen} />
                <div className='layout-content'>
                  <Outlet />
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <div className='no-data-indicate-page'>
            <div className='dot-type-loader' />
          </div>
        )}
      </div>
    );
  }
  setIsOPen = (isOpen) => {
    this.setState({ isOpen });
  };
  handleMenu = () => {
    this.setState({ menuType: !this.state.menuType });
  };
}
export default Layout;
