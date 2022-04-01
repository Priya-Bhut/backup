import { size } from 'lodash';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import withRouter from '../WrapperComponents/withRouter';
import { deleteSequenceData } from './Action';

function SearchSelectSequence(props) {
  const { openSequence, selectSequence, params } = props;
  const { organisationUrl } = params;

  const Users = props?.sequenceData?.slice(0, size(props?.sequenceData));
  const lastIndex = parseInt(size(props?.sequenceData) / 4);
  const [currentPage, setCurrentPage] = useState(0);
  const userPrePage = 4;
  const pageVisited = currentPage * userPrePage;

  const displayUser = Users.slice(pageVisited, pageVisited + userPrePage).map((data, index) => {
    {
      return (
        <div className='col-lg-3 col-md-4 col-sm-12 mb-3' key={index}>
          <Card className='sequence-card'>
            <Card.Header>
              <div className='card-title'>
                <Card.Subtitle className='sequence-card-subtitle'>{data?.name}</Card.Subtitle>
                <i className='fa fa-solid fa-trash  btntrash' onClick={() => handleDelete(data?.id)}></i>
              </div>
            </Card.Header>
            <Card.Body className='sequence-card-body'>
              <ul className='mile'>
                {data?.milestones?.map((mile, index) => {
                  return (
                    <li key={index}>
                      <span>{mile?.overAllPercentage}%</span>
                      <div>{mile?.name}</div>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
            <Card.Footer>
              <Button className='primary' onClick={() => handleClick(data)}>
                Select
              </Button>
            </Card.Footer>
          </Card>
        </div>
      );
    }
  });

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goToNextPage = () => {
    if (currentPage < lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };
  const deleteSequenceData = (id) => {
    props
      ?.deleteSequenceData(id, organisationUrl)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          props?.handleAlert('Sequence Deleted', 'success');
          props?.getSequenceData();
        } else {
          props?.handleAlert(response?.errorMessage || response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };
  const handleClick = (data) => {
    props?.setUpdateData(data);
    props?.setSelectSequence(!selectSequence);
    props?.setOpenSequence(!openSequence);
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
            <span className='createNew' onClick={() => props?.handleAddSequenceModal()}>
              Create new
            </span>
            <div className='pagination'>
              <i className='fas fa-caret-square-o-left btnchevron ' onClick={() => goToPreviousPage()}></i>
              &nbsp;
              <i className='fas fa-caret-square-o-right btnchevron ' onClick={() => goToNextPage()}></i>
            </div>
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
          <div className='row milestn'>{displayUser}</div>
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
