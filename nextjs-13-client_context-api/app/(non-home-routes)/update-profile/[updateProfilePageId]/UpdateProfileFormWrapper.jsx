'use client';

import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function UpdateProfilePageWrapper({ data, profileId }) {
  // const { fullName, email, website, about } = data.profile;
  const router = useRouter();

  const [developerProfileData, setDeveloperProfileData] = useState({
    fullName: data.profile.fullName,
    email: data.profile.email,
    website: data.profile.website,
    about: data.profile.about,
  });
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // console.log(data);

  // setDeveloperProfileData({
  //   fullName,
  //   email,
  //   website,
  //   about,
  // });

  async function handleUpdateProfile(e) {
    e.preventDefault();
    setShowLoadingModal(true);

    // console.log(developerProfileData);
    const url = `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/update-profile/${profileId}`;

    const updatedProfile = await axios.patch(url, developerProfileData);
    console.log(updatedProfile);

    if (updatedProfile && updatedProfile.data.responseMessage) {
      setShowLoadingModal(false);
      setShowSuccessModal(true);

      setDeveloperProfileData({
        fullName: '',
        email: '',
        website: '',
        about: '',
      });

      setTimeout(() => {
        setShowSuccessModal(false);
        router.push('/');
      }, 2000);
    }
  }

  return (
    <>
      <section className='pop-ups relative'>
        {/* <!-- progress modal --> */}
        <div
          className={`progress-modal rounded w-[280px] sm:w-[500px] px-4 py-3 text-center bg-blue-100 
        text-blue-900 ${
          showLoadingModal ? 'block' : 'hidden'
        } absolute top-0 left-0 right-0 mx-auto`}
        >
          Developer profile is being updated, please wait.
        </div>

        {/* <!-- success modal --> */}
        <div
          className={`success-modal rounded w-[280px] sm:w-[500px] px-4 py-3 text-center bg-green-100 
        text-green-900 ${
          showSuccessModal ? 'block' : 'hidden'
        } absolute top-0 left-0 right-0 mx-auto`}
        >
          Developer profile updated successfully
        </div>
      </section>

      <header className='section-header text-center'>
        <h1 className='text-3xl text-blue-900 font-bold poppins'>
          Update Developer Profile
        </h1>
        <p className='sm:text-[16px] mt-4'>
          Ensure to use a different/unique email for this profile.
        </p>
      </header>
      <section className='form-wrapper mt-16'>
        <form onSubmit={handleUpdateProfile} className='update-profile-form'>
          <div className='fullName input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='fullName' className='text-[16px] font-bold'>
              Full name
            </label>
            <input
              id='fullName'
              type='text'
              placeholder='full name'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.fullName}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  fullName: e.target.value,
                });
              }}
            />
          </div>
          <div className='email input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='email' className='text-[16px] font-bold'>
              Email
            </label>
            <input
              id='email'
              type='email'
              placeholder='email'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.email}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className='website input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='website' className='text-[16px] font-bold'>
              Website
            </label>
            <input
              id='website'
              type='text'
              placeholder='https://example-website.com'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.website}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  website: e.target.value,
                });
              }}
            />
          </div>
          <div className='about input-group flex flex-col gap-3 mb-5'>
            <label htmlFor='about' className='text-[16px] font-bold'>
              about
            </label>
            <textarea
              rows='7'
              id='about'
              type='text'
              placeholder='developer bio'
              required
              className='rounded border px-3 py-3 outline-none'
              value={developerProfileData.about}
              onChange={(e) => {
                setDeveloperProfileData({
                  ...developerProfileData,
                  about: e.target.value,
                });
              }}
            ></textarea>
          </div>
          <button
            type='submit'
            className='py-3 text-white bg-blue-900 mt-8 w-full text-[16px] font-bold'
          >
            Update Profile
          </button>
        </form>
      </section>
    </>
  );
}

export default UpdateProfilePageWrapper;
