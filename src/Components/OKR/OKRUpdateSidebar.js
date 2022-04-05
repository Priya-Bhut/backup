import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Card, Dropdown } from 'react-bootstrap';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';
import withRouter from '../WrapperComponents/withRouter';
import { connect } from 'react-redux';
import { updateObjective } from './Action';

function OKRUpdateSidebar(props) {
  const { okr, params } = props || {};
  const { organisationUrl } = params || {};

  const [updateData, setUpdateData] = useState({
    id: okr?.id || 0,
    description: okr?.description || '',
    tags: okr?.tags || [],
    timePeriod: okr?.timePeriod || {},
    color: okr?.color || '',
    selectedPeriodMonth: okr?.selectedPeriodMonth || '',
    name: okr?.name || '',
    employeeId: okr?.employeeId || 0,
    objectiveStatus: okr?.objectiveStatus || '',
  });

  const updateObjective = () => {
    props
      ?.updateObjective(organisationUrl, updateData)
      .then((response) => {
        if (response && !response?.errorMessage && !response?.error) {
          props?.handleAlert('Keyresult Updated', 'success');
          props?.getObjective();
        } else {
          props?.handleAlert(!response?.errorMessage || !response?.error || 'Something went wrong', 'error');
        }
      })
      .catch((error) => {
        props?.handleAlert(error?.message || 'Something went wrong', 'error');
      });
  };

  return (
    <>
      <div className='sidebaroverlay'>
        <div className='updatesideBar'>
          <div className='sideBar-type'>
            <div className='sideBar-type1'>
              <div id='circle'>
                <ChangeHistoryIcon />
              </div>
              <div className='key'>
                <span className='span-key'>OKR Levels</span>
                <span>brilworks-OKRS</span>
                <span className='tooltiptext'>brilworks-OKRS</span>
              </div>
            </div>
            <div className='sidebar-type2'>
              <div id='circle'>
                <i className='fa fa-eye'></i>
              </div>
              <div className='key'>
                <span className='span-key'>Visibility</span>

                <Dropdown>
                  <Dropdown.Toggle className='status-dropdown' variant='default'>
                    Please Choose Visibility
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <div className='visibility-item'>
                      <input type='checkbox' id='emp' value='employee' />
                      <Dropdown.Item href='#'>All Employees</Dropdown.Item>
                    </div>
                    <div className='visibility-item'>
                      <input type='checkbox' id='mangement' value='management' />
                      <Dropdown.Item href='#'>My Management</Dropdown.Item>
                    </div>
                    <div className='visibility-item'>
                      <input type='checkbox' id='direct' value='directs' />
                      <Dropdown.Item href='#'>My Directs</Dropdown.Item>
                    </div>
                    <div className='visibility-item'>
                      <input type='checkbox' id='team' value='team' />
                      <Dropdown.Item href='#'>My Team</Dropdown.Item>
                    </div>
                    <div className='visibility-item'>
                      <input type='checkbox' id='self' value='myself' />
                      <Dropdown.Item href='#'>Only Myself</Dropdown.Item>
                    </div>
                    <div className='visibility-item'>
                      <input type='checkbox' id='list' value='accesslist' />
                      <Dropdown.Item href='#'>Access List</Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className='sidebar-type3'>
              <div id='circle'>
                <i className='fa fa-calendar'></i>
              </div>
              <div className='key'>
                <span className='span-key'>Target Date1</span>
                <span>Jan 1-Jun 1</span>
              </div>
            </div>
            <div className='sidebar-type4'>
              <i className={`fa fa-times closeModel`} onClick={() => props?.setIsOpenOkr(false)}></i>
            </div>
          </div>

          <hr></hr>
          <div className='key-result'>
            <textarea
              cols={63}
              rows={3}
              placeholder='Type Your Objective..'
              className='textareaKeyResult'
              value={updateData?.name}
              onChange={(e) => setUpdateData({ ...updateData, name: e?.target?.value })}
            ></textarea>
          </div>
          <div className='editor'>
            <Editor
              apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
              value={updateData?.description}
              onEditorChange={(content) => setUpdateData({ ...updateData, description: content })}
              init={{
                statusbar: false,
                placeholder: 'Additional Context...',
                menubar: false,
                plugins: [
                  'advlist autolink lists link image',
                  'charmap print preview anchor help',
                  'searchreplace visualblocks code',
                  'insertdatetime media table paste wordcount',
                ],
                toolbar:
                  'undo redo | formatselect | bold italic |   alignleft aligncenter alignright | bullist numlist outdent indent',
              }}
            />
          </div>
          <div className='assignee'>
            <div className='sidebar-user'>
              <div id='circlelocation'>
                <i className='fa fa-light fa-user' />
              </div>
              <div className='key'>
                <span className='span-key'>Owner</span>
                <a href='#' className='SearchAssignee'>
                  Search & Select Assignee
                </a>
              </div>
            </div>
            <div className='tag'>
              <div id='circletag'>
                <i className='fa fa-tags'>
                  <span className='tooltiptext'>Tags</span>
                </i>
              </div>
            </div>
          </div>
          <div className='aligntitle'>
            <span>Alignments</span>
            <a href='#'>Align</a>
          </div>

          <div className='alignments'>
            <Card className='topcardsdesign'>
              <Card.Body>
                <div className='inner-body'>
                  <Card.Title></Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>No alignment yet</Card.Subtitle>
                  <Button variant='primary'>Align</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className='toggle-btn'>
            <button className='updatesidebar-btn'>Cancel</button>
            <button className='updatesidebar-btn' onClick={updateObjective}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapDispacthToProps = {
  updateObjective,
};

export default connect(null, mapDispacthToProps)(withRouter(OKRUpdateSidebar));
