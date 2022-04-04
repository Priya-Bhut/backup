import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

export default function CreateNotes() {
  const [newNotes, setnewNotes] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: 0,
    noteAddedBy: 0,
    noteText: '',
    objectiveId: 0,
    keyResultId: 0,
  });
  const createNewNotes = () => {
    setnewNotes(!newNotes);
  };
  const handleData = () => {};
  return (
    <>
      <Card className='p-3 KPI-card'>
        <div>
          <div className='notes'>
            <i className='fas fa-plus-circle notes-button' onClick={() => createNewNotes()}></i>&nbsp;
            <span className='notes-button'>Create New Note</span>
          </div>
          {newNotes && (
            <div className='note-editor'>
              <Editor
                apiKey='h1a0ymnw0nixvy8bnuahlmmfo0422ltzxfsrv2gprc51cutm'
                value={updateData?.noteText}
                onEditorChange={(content) => setUpdateData({ ...updateData, noteText: content })}
                init={{
                  statusbar: false,
                  placeholder: 'Description...',
                  menubar: false,
                  height: 100,
                  toolbar: ' bold italic underline| bullist numlist',
                  plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount',
                  ],
                }}
              />
              <div className='update-cancle-btn'>
                <Button variant='primary' onClick={() => handleData()}>
                  Create
                </Button>
                <Button variant='secondary' onClick={() => setnewNotes(false)}>
                  Cancle
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  );
}
