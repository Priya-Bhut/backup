import React from 'react';
import { Button } from 'react-bootstrap';
import size from 'lodash/size';
import orgLogo from '../../images/orgLogo.png';
import { connect } from 'react-redux';
import { doGetMappedOrganisations } from './action';
import withRouter from '../WrapperComponents/withRouter';
import NoDataIndicatePage from '../reusable/NoDataIndicatePage';
class LoginOrganisation extends React.Component {
  constructor(props) {
    super(props);
    const res = localStorage.getItem('token');
    this.state = { name: res?.fullName, organizationDetails: [], loading: false };
  }

  componentDidMount() {
    this.getOrgData();
  }

  getOrgData = () => {
    this.setState({ loading: true }, async () => {
      await this.props
        .doGetMappedOrganisations()
        .then((response) => {
          if (response && !response.errorMessage && !response.error) {
            this.setState({ organizationDetails: response, loading: false });
          } else {
            this.setState({ loading: false });
            this.props?.handleAlert(
              response?.errorMessage || response?.error?.message || 'Something went wrong',
              'error',
            );
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          this.props?.handleAlert(error?.message || 'Something went wrong', 'error');
        });
    });
  };

  handleRole = (organisationUrl) => {
    this.props?.history(`/${organisationUrl}`);
  };

  render() {
    const { name, organizationDetails, loading } = this.state;
    return (
      <div className='organisationContainer'>
        <div className='profile-name'>
          <h4>Hi {name || ''}!</h4>
          <p className='text-muted'>
            you belong to the organisations. Please select the organisation you wish to access now.
          </p>
        </div>
        <br />
        {loading ? (
          <div className='no-data-indicate-page'>
            <div className='dot-type-loader' />
          </div>
        ) : size(organizationDetails) ? (
          organizationDetails?.map((item, index) => {
            return (
              <div key={index}>
                <div className='profileOrganisation'>
                  <div className='organisation-img'>
                    <img className='organisation-logo' src={orgLogo} alt='ORGANISTION LOGO'></img>
                  </div>
                  <div className='organisation-detail'>
                    <h5>{item?.organisationName}</h5>
                    <span>Organisation ID:{item?.organizationId}</span>
                    <br />
                    <span className='organisationDate'>Organisation created on {item?.createdAt}</span>
                  </div>
                  <div className='org-btn'>
                    <Button
                      variant='outline-dark'
                      className='orgBtn'
                      onClick={() => this.handleRole(item?.organisationUrl)}
                    >
                      Go to this Organisation
                    </Button>
                  </div>
                </div>
                <br />
                <hr />
              </div>
            );
          })
        ) : (
          <NoDataIndicatePage icon='fas fa-university' content='You are not mapped with organisation' />
        )}
      </div>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = {
  doGetMappedOrganisations,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginOrganisation));
