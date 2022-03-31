import React /* useEffect, */ /* useState */ from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import withRouter from '../WrapperComponents/withRouter';
import { deleteSequenceData } from './Action';

function SearchSelectSequence(props) {
  const { openSequence, params } = props;
  const { organisationUrl } = params;

  const deleteSequenceData = (id) => {
    props
      ?.deleteSequenceData(id, organisationUrl)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          this?.props?.handleAlert('Sequence Deleted', 'success');
          props?.getSequenceData;
        } else {
          this?.props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        this?.props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };
  const handleClick = (data) => {
    props?.setUpdateData(data);
    props?.setSelectSequence(!props?.selectSequence);
    props?.setOpenSequence(!props?.openSequence);
  };
  const handleDelete = (id) => {
    deleteSequenceData(id);
  };
  return (
    <>
      <Modal size='xl' show={openSequence} onHide={() => props?.setOpenSequence(!openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Select Sequence</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequence-label'>
            <span>Creating a new sequence</span>
            <br />
            <span onClick={() => props?.handleAddSequenceModal()}>Create new</span>
          </div>
          <hr></hr>
          {/* <div className='templates'>
            <ul>
            <li>
            <a href='#'>Predefined Templates</a>
            </li>
            <li>
            <a href='#'>My Templates</a>
            </li>
            </ul>
          </div> */}
          <div className='row milestn'>
            {props?.sequenceData?.map((data, index) => {
              return (
                <div className='col mb-3' key={index}>
                  <Card className='sequence-card'>
                    <Card.Header>
                      <div className='card-title'>
                        <Card.Subtitle>{data?.name}</Card.Subtitle>
                        <i className='fa fa-solid fa-trash fa-2x btntrash' onClick={() => handleDelete(data?.id)}></i>
                      </div>
                    </Card.Header>
                    <Card.Body>
                      <ul className='mile'>
                        {data.milestones.map((mile, index) => {
                          return (
                            <li key={index}>
                              <span>{mile.overAllPercentage}%</span>
                              <div>{mile.name}</div>
                            </li>
                          );
                        })}
                      </ul>
                    </Card.Body>
                    <Card.Footer>
                      <Button className='primary' onClick={() => handleClick(data)}>
                        select
                      </Button>
                    </Card.Footer>
                  </Card>
                </div>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => props?.handleAddSequenceModal()}>
            Add
          </Button>
          <Button variant='secondary' onClick={() => props?.setOpenSequence(!openSequence)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapDispatchToProps = {
  deleteSequenceData,
};

export default connect(null, mapDispatchToProps)(withRouter(SearchSelectSequence));
