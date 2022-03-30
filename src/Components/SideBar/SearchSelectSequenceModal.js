import React /* useEffect, */ /* useState */ from 'react';
import { Modal, Button } from 'react-bootstrap';
// import SelectSequenceModal from './SelectSequenceModal';
import { deleteSequenceData } from './Action';
import { connect } from 'react-redux';
import withRouter from '../WrapperComponents/withRouter';

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
      <Modal show={openSequence} onHide={() => props?.setOpenSequence(!openSequence)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <span>Select Sequence</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sequencelabel'>
            <span>Creating a new sequence</span>
            <br />
            {props?.sequenceData?.map((data, index) => {
              return (
                <>
                  <Button key={index} variant='primary' onClick={() => handleClick(data)}>
                    {data?.name}
                  </Button>
                  <span onClick={() => handleDelete(data?.id)}>X</span>
                </>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => props?.handleAddSequenceModal()}>
            Create new
          </Button>
          <Button variant='secondary' onClick={() => props?.setOpenSequence(!openSequence)}>
            Cancel
          </Button>
          {/*  <div>
            {selectSequence && (
              <SelectSequenceModal
                updateData={propsupdateData}
                handleAlert={props?.handleAlert}
                // setSelectSequence={setSelectSequence}
                handleAddSequenceModal={props?.handleAddSequenceModal}
                selectSequence={props?.selectSequence}
                // setSequenceName={props?.setSequenceName}
                setOpenSequence={props?.setOpenSequence}
                openSequence={openSequence}
                setSequence={props?.setSequence}
                getSequenceData={props?.getSequenceData}
              />
            )}
          </div> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
const mapDispatchToProps = {
  deleteSequenceData,
};

export default connect(null, mapDispatchToProps)(withRouter(SearchSelectSequence));
