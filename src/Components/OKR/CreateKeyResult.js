import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addKeyResult } from './Action';

function CreateKeyResult(props) {
  const [keyResult, setKeyResult] = useState({
    objectiveId: props?.id,
    title: '',
    description: '',
    assignees: [],
    // name: 'Q1-2022',
    // code: 'Q1',
    // type: 1,
    startDate: '2022-03-15',
    endDate: '2022-03-15',
    progress: 0,
    parentKeyResultId: 0,
    checkInFrequency: 0,
    keyResultTypeName: '',
    percenetData: '',
  });

  const addKeyResult = () => {
    if (keyResult.title.trim() !== '') {
      props
        ?.addKeyResult(keyResult)
        .then((response) => {
          if (response && !response?.errorMessage && !response?.error) {
            props?.handleAlert('Obejctive created', 'success');
            props?.closeNewOkr();
            props?.getObjective();
          } else {
            props?.handleAlert(!response?.errorMessage || !response?.error || 'Something went wrong', 'error');
          }
        })
        .catch((error) => {
          props?.handleAlert(error?.message || 'Something went wrong', 'error');
        });
    } else {
      props?.handleAlert('Enter keyResult Name', 'error');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addKeyResult();
    }
  };

  return (
    <div className='new-okr-container' onKeyPress={handleKeyPress}>
      <div className='new-okr-title-container w-55'>
        <i className='fas fa-key'></i>
        <input
          type='text'
          placeholder='Enter your key result'
          onChange={(e) => setKeyResult({ ...keyResult, title: e?.target?.value })}
        />
      </div>
      <div className='w-20 new-okr-calendar-container'>
        <Button className='new-okr-calendar-button'>
          Q1-2022
          <span>
            <i className='fa fa-chevron-down'></i>
          </span>
        </Button>
        <div className='p-l-5 new-okr-assignee-container'>
          <i className='fa fa-user-circle'></i>
          <i className='fa fa-user-circle'></i>
        </div>
      </div>
      <div className='w-25 new-okr-save-progress-container'>
        <ProgressBar now={10} label={`0%`} />
        <Button className='new-okr-save-button' onClick={addKeyResult}>
          Save
        </Button>
        <i className='fas fa-times' onClick={props?.closeNewOkr}></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addKeyResult,
};

export default connect(null, mapDispatchToProps)(CreateKeyResult);
