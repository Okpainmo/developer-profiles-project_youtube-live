'use client';

import React from 'react';
import { useContext } from 'react';
import { HomeContext } from '../context/HomeContext';

function HomeOverlay() {
  const { showOverlay, handleHideOverlay, handleDeleteProfile } =
    useContext(HomeContext);

  return (
    <>
      {/* <!-- overlay --> */}

      <div
        id='modalOverlay'
        className={`overlay fixed min-h-screen top-0 left-0 right-0 ${
          showOverlay ? 'flex' : 'hidden'
        } justify-center items-center`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
      >
        <div className='overlay-modal bg-white p-6 rounded w-[400px] flex flex-col gap-4'>
          <h3 className='font-bold text-[20px]'>Delete a developer profile</h3>
          <div>
            You are about to delete a developer profile, are you sure you want
            to continue?
          </div>
          <div className='buttons-wrapper flex gap-6'>
            <button
              type='button'
              onClick={handleHideOverlay}
              className='rounded px-4 py-2 font-bold bg-blue-100 text-blue-900 hover:bg-blue-200'
            >
              No thanks!
            </button>
            <button
              type='button'
              onClick={handleDeleteProfile}
              className='rounded px-4 py-2 font-bold bg-green-100 text-green-900 hover:bg-green-200'
            >
              Yes delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeOverlay;
