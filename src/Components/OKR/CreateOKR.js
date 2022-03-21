import React, { useState } from 'react';
import { ProgressBar, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addObjective } from './Action';

function CreateOKR(props) {
  const [objective, setObjective] = useState({
    name: '',
    assignees: [],
    timePeriod: {
      name: 'Q1-2022',
      code: 'Q1',
      type: 1,
      startDate: '2022-03-15',
      endDate: '2022-03-15',
    },
    overAllProgess: 0,
  });

  const addObjective = () => {
    props
      ?.addObjective(objective)
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
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && objective.name.trim() !== '') {
      addObjective();
    }
  };

  return (
    <div className='new-okr-container' onKeyPress={handleKeyPress}>
      <div className='new-okr-title-container w-55'>
        <i className='fas fa-crosshairs'></i>
        <input
          type='text'
          placeholder='Create your new objective'
          onChange={(e) => setObjective({ ...objective, name: e?.target?.value })}
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
          <i className='fa fa-user-circle'></i>
        </div>
      </div>
      <div className='w-25 new-okr-save-progress-container'>
        <ProgressBar now={5} label={`0%`} />
        <Button className='new-okr-save-button' onClick={addObjective}>
          Save
        </Button>
        <i className='fas fa-times' onClick={props?.closeNewOkr}></i>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  addObjective,
};

export default connect(null, mapDispatchToProps)(CreateOKR);
