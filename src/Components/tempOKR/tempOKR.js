import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import list from './data.json';
import FiberManualRecordOutlinedIcon from '@material-ui/icons/FiberManualRecordOutlined';

function TempOKR() {
  const [level1, setLevel1] = useState([]);
  const [level2, setLevel2] = useState([]);
  const [level3, setLevel3] = useState([]);
  const [level4, setLevel4] = useState([]);
  const [level5, setLevel5] = useState([]);

  const [renderLevel, setRenderLevel] = useState(1);

  useEffect(() => {
    setLevel1(list.level1);
    setLevel2(list.level2);
    setLevel3(list.level3);
    setLevel4(list.level4);
    setLevel5(list.level5);
  }, []);

  const setRender = (value) => {
    renderLevel > value ? setRenderLevel(value) : setRenderLevel(value + 1);
  };

  return (
    <div className='okr-view'>
      <table cellPadding='10px' className='main-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Icons</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Assignee</th>
            <th>Progress</th>
            <th>Operations</th>
          </tr>
        </thead>
        {level1.map((item) => {
          return (
            <>
              <tbody>
                <tr>
                  <td className='level1'>
                    <i className='fa fa-plus-circle' onClick={() => setRender(1)} />
                    <FiberManualRecordOutlinedIcon className='mui-icon' />
                    {item.name}
                  </td>
                  <td>
                    <i className='fa fa-file-text-o' />
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='20' height='20'>
                      <path
                        d='M1.5,12.9H5.7m14,0h4.2m-13,0h3.5M8.5,7h0a2.3,2.3,0,0,1,2.3,2.3v7.5a2.3,2.3,0,0,1-2.3,2.3h0a2.3,2.3,0,0,1-2.3-2.3V9.3A2.3,2.3,0,0,1,8.5,7ZM17,1h0a2.3,2.3,0,0,1,2.3,2.3V21.5A2.3,2.3,0,0,1,17,23.8h0a2.3,2.3,0,0,1-2.3-2.3V3.3A2.3,2.3,0,0,1,17,1Z '
                        transform='translate(-0.5) '
                        fill='none '
                        stroke='currentcolor'
                        strokeLinecap='round '
                        strokeMiterlimit='10 '
                        strokeWidth='1.5'
                      ></path>
                    </svg>
                  </td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <i className='fa fa-user-circle' />
                  </td>
                  <td>{item.progress}</td>
                  <td>
                    <i className='fa fa-pencil' />
                    <i className='fa fa-ellipsis-h' />
                  </td>
                </tr>
              </tbody>
              {renderLevel >= 2 &&
                level2
                  .filter((item2) => item2.l1ID === item.id)
                  .map((item) => {
                    return (
                      <>
                        <tbody>
                          <tr>
                            <td className='level2'>
                              <i className='fa fa-plus-circle' onClick={() => setRender(2)} />
                              <FiberManualRecordOutlinedIcon className='mui-icon' />
                              {item.name}
                            </td>
                            <td>
                              <i className='fa fa-file-text-o' />
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 24 24'
                                fill='white'
                                width='20'
                                height='20'
                              >
                                <path
                                  d='M1.5,12.9H5.7m14,0h4.2m-13,0h3.5M8.5,7h0a2.3,2.3,0,0,1,2.3,2.3v7.5a2.3,2.3,0,0,1-2.3,2.3h0a2.3,2.3,0,0,1-2.3-2.3V9.3A2.3,2.3,0,0,1,8.5,7ZM17,1h0a2.3,2.3,0,0,1,2.3,2.3V21.5A2.3,2.3,0,0,1,17,23.8h0a2.3,2.3,0,0,1-2.3-2.3V3.3A2.3,2.3,0,0,1,17,1Z '
                                  transform='translate(-0.5) '
                                  fill='none '
                                  stroke='currentcolor'
                                  strokeLinecap='round '
                                  strokeMiterlimit='10 '
                                  strokeWidth='1.5'
                                ></path>
                              </svg>
                            </td>
                            <td>{item.startDate}</td>
                            <td>{item.endDate}</td>
                            <td>
                              <i className='fa fa-user-circle' />
                            </td>
                            <td>{item.progress}</td>
                            <td>
                              <i className='fa fa-pencil' />
                              <i className='fa fa-ellipsis-h' />
                            </td>
                          </tr>
                        </tbody>
                        {renderLevel >= 3 &&
                          level3
                            .filter((item2) => item2.l2ID === item.id)
                            .map((item) => {
                              return (
                                <>
                                  <tbody>
                                    <tr>
                                      <td className='level3'>
                                        <i className='fa fa-plus-circle' onClick={() => setRender(3)} />
                                        <FiberManualRecordOutlinedIcon className='mui-icon' />
                                        {item.name}
                                      </td>
                                      <td>
                                        <i className='fa fa-file-text-o' />
                                        <svg
                                          xmlns='http://www.w3.org/2000/svg'
                                          viewBox='0 0 24 24'
                                          fill='white'
                                          width='20'
                                          height='20'
                                        >
                                          <path
                                            d='M1.5,12.9H5.7m14,0h4.2m-13,0h3.5M8.5,7h0a2.3,2.3,0,0,1,2.3,2.3v7.5a2.3,2.3,0,0,1-2.3,2.3h0a2.3,2.3,0,0,1-2.3-2.3V9.3A2.3,2.3,0,0,1,8.5,7ZM17,1h0a2.3,2.3,0,0,1,2.3,2.3V21.5A2.3,2.3,0,0,1,17,23.8h0a2.3,2.3,0,0,1-2.3-2.3V3.3A2.3,2.3,0,0,1,17,1Z '
                                            transform='translate(-0.5) '
                                            fill='none '
                                            stroke='currentcolor'
                                            strokeLinecap='round '
                                            strokeMiterlimit='10 '
                                            strokeWidth='1.5'
                                          ></path>
                                        </svg>
                                      </td>
                                      <td>{item.startDate}</td>
                                      <td>{item.endDate}</td>
                                      <td>
                                        <i className='fa fa-user-circle' />
                                      </td>
                                      <td>{item.progress}</td>
                                      <td>
                                        <i className='fa fa-pencil' />
                                        <i className='fa fa-ellipsis-h' />
                                      </td>
                                    </tr>
                                  </tbody>
                                  {renderLevel >= 4 &&
                                    level4
                                      .filter((item2) => item2.l3ID === item.id)
                                      .map((item) => {
                                        return (
                                          <>
                                            <tbody>
                                              <tr>
                                                <td className='level4'>
                                                  <i className='fa fa-plus-circle' onClick={() => setRender(4)} />
                                                  <FiberManualRecordOutlinedIcon className='mui-icon' />
                                                  {item.name}
                                                </td>
                                                <td>
                                                  <i className='fa fa-file-text-o' />
                                                  <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 24 24'
                                                    fill='white'
                                                    width='20'
                                                    height='20'
                                                  >
                                                    <path
                                                      d='M1.5,12.9H5.7m14,0h4.2m-13,0h3.5M8.5,7h0a2.3,2.3,0,0,1,2.3,2.3v7.5a2.3,2.3,0,0,1-2.3,2.3h0a2.3,2.3,0,0,1-2.3-2.3V9.3A2.3,2.3,0,0,1,8.5,7ZM17,1h0a2.3,2.3,0,0,1,2.3,2.3V21.5A2.3,2.3,0,0,1,17,23.8h0a2.3,2.3,0,0,1-2.3-2.3V3.3A2.3,2.3,0,0,1,17,1Z '
                                                      transform='translate(-0.5) '
                                                      fill='none '
                                                      stroke='currentcolor'
                                                      strokeLinecap='round '
                                                      strokeMiterlimit='10 '
                                                      strokeWidth='1.5'
                                                    ></path>
                                                  </svg>
                                                </td>
                                                <td>{item.startDate}</td>
                                                <td>{item.endDate}</td>
                                                <td>
                                                  <i className='fa fa-user-circle' />
                                                </td>
                                                <td>{item.progress}</td>
                                                <td>
                                                  <i className='fa fa-pencil' />
                                                  <i className='fa fa-ellipsis-h' />
                                                </td>
                                              </tr>
                                            </tbody>
                                            {renderLevel >= 5 &&
                                              level5
                                                .filter((item2) => item2.l4ID === item.id)
                                                .map((item) => {
                                                  return (
                                                    <>
                                                      <tbody>
                                                        <tr>
                                                          <td className='level5'>
                                                            <FiberManualRecordOutlinedIcon className='mui-icon' />
                                                            {item.name}
                                                          </td>
                                                          <td>
                                                            <i className='fa fa-file-text-o' />
                                                            <svg
                                                              xmlns='http://www.w3.org/2000/svg'
                                                              viewBox='0 0 24 24'
                                                              fill='white'
                                                              width='20'
                                                              height='20'
                                                            >
                                                              <path
                                                                d='M1.5,12.9H5.7m14,0h4.2m-13,0h3.5M8.5,7h0a2.3,2.3,0,0,1,2.3,2.3v7.5a2.3,2.3,0,0,1-2.3,2.3h0a2.3,2.3,0,0,1-2.3-2.3V9.3A2.3,2.3,0,0,1,8.5,7ZM17,1h0a2.3,2.3,0,0,1,2.3,2.3V21.5A2.3,2.3,0,0,1,17,23.8h0a2.3,2.3,0,0,1-2.3-2.3V3.3A2.3,2.3,0,0,1,17,1Z '
                                                                transform='translate(-0.5) '
                                                                fill='none '
                                                                stroke='currentcolor'
                                                                strokeLinecap='round '
                                                                strokeMiterlimit='10 '
                                                                strokeWidth='1.5'
                                                              ></path>
                                                            </svg>
                                                          </td>
                                                          <td>{item.startDate}</td>
                                                          <td>{item.endDate}</td>
                                                          <td>
                                                            <i className='fa fa-user-circle' />
                                                          </td>
                                                          <td>{item.progress}</td>
                                                          <td>
                                                            <i className='fa fa-pencil' />
                                                            <i className='fa fa-ellipsis-h' />
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </>
                                                  );
                                                })}
                                          </>
                                        );
                                      })}
                                </>
                              );
                            })}
                      </>
                    );
                  })}
            </>
          );
        })}
      </table>
    </div>
  );
}

export default TempOKR;
