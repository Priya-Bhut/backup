import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import SideMenu from '../SideMenu';
import LogOut from '../SignIn/LogOut';
import withRouter from '../WrapperComponents/withRouter';
// import TopNavbar from '../TopNavbar';

export class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, menuType: true, loading: true };
  }
  setIsOpen = (isOpen) => {
    this.setState({ isOpen });
  };
  handleLogout = () => {
    this.props.history('/login');
    localStorage.clear('token');
    this.setState({ isOpen: false });
  };
  render() {
    const { loading, menuType, isOpen } = this.state;
    return (
      <div>
        {loading ? (
          <Container fluid>
            <Row className='gridStyle'>
              <Col xs={1} lg='2' className={`sidebar ${menuType && 'reduce-sidebar'}`}>
                <SideMenu menuType={menuType} handleMenu={this.handleMenu} setIsOpen={this.setIsOpen} />
              </Col>
              <Col xs={11} className={`mainPart ${menuType && `extendMainPart`}`}>
                {/* <TopNavbar setIsOpen={this.setIsOpen} /> */}
                <div className='layout-content'>
                  <Outlet />
                </div>
                {isOpen && <LogOut handleLogout={this.handleLogout} setIsOpen={this.setIsOpen} isOpen={isOpen} />}
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
export default withRouter(Layout);
