import React from 'react';
import { Card, Dropdown } from 'react-bootstrap';
import '../style/notes.css';

export default function Notes() {
  return (
    <>
      <div className='notes-header'>
        <div className='title-notes'>
          <h5>Notes</h5>
        </div>
        <Dropdown className='notes-dropdown'>
          <Dropdown.Toggle className='notes-dropdown-toggle' variant='default'>
            Notes
          </Dropdown.Toggle>
          <Dropdown.Menu className='notes-menu'>
            <div className='visibility-item'>
              <input type='checkbox' id='emp' value='employee' />
              <Dropdown.Item href='#'>My Notes on All OKRs</Dropdown.Item>
            </div>
            <div className='visibility-item'>
              <input type='checkbox' id='mangement' value='management' />
              <Dropdown.Item href='#'>All Notes on Your OKRs</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='notes-cards'>
        <Card className='notes-card-design'>
          <Card.Body>
            <div>
              <Card.Title>asd</Card.Title>
              <Card.Subtitle className='mb-2 text-muted'>Users1</Card.Subtitle>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
