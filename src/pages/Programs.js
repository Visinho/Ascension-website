import React from 'react';
import { ProgramList } from '../helpers/ProgramList';

const Programs = () => {
  return (
    <div className='programs'>
      <h1 className='menuTitle'>Our Programs</h1>
      <div className='programList'>
        {ProgramList.map((programList, key) => {
            return<div>
                {programList.name}
            </div>
        })}
      </div>
    </div>
  )
}

export default Programs
