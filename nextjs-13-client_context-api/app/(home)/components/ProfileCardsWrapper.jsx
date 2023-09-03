'use client';

import ProfileCard from './ProfileCard';
import { useContext, useEffect } from 'react';
import { HomeContext } from '../context/HomeContext';
import axios from 'axios';

function ProfileCardsWrapper({ serverData }) {
  const {
    profilesData,
    isProfileDeleted,
    setIsProfileDeleted,
    setProfilesData,
  } = useContext(HomeContext);

  useEffect(() => {
    const url =
      'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';

    const handleFetchData = async () => {
      const fetchedData = await axios.get(url);
      setProfilesData(fetchedData.data);
    };

    handleFetchData();

    return () => {
      setIsProfileDeleted(false);
    };
  }, [isProfileDeleted, setIsProfileDeleted, setProfilesData]);

  if (!profilesData && !serverData) {
    return (
      <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
        Loading developer profiles...
      </p>
    );
  }

  if (
    (profilesData && profilesData.profiles.length < 1) ||
    (serverData && serverData.length < 1)
  ) {
    return (
      <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
        No profiles added yet!!! <br /> Please add one or more profiles to see
        them here.
      </p>
    );
  }

  /* This conditional renders the data from the server 
  fetch until the data from the client fetch is available and ready */

  if (!profilesData && serverData && serverData.profiles.length > 0) {
    return (
      <section
        className='card-wrapper mt-10 flex flex-col md:flex-row 
              gap-6 md:gap-[60px] sm:px-[10%] md:px-[20px] md:justify-center md:mx-auto md:flex-wrap lg:px-[10%]'
      >
        {serverData.profiles.map((profile) => {
          const { _id } = profile;
          return <ProfileCard key={_id} profile={profile} />;
        })}
      </section>
    );
  }

  if (profilesData && profilesData.profiles.length > 0) {
    return (
      <section
        className='card-wrapper mt-10 flex flex-col md:flex-row 
              gap-6 md:gap-[60px] sm:px-[10%] md:px-[20px] md:justify-center md:mx-auto md:flex-wrap lg:px-[10%]'
      >
        {profilesData.profiles.map((profile) => {
          const { _id } = profile;
          return <ProfileCard key={_id} profile={profile} />;
        })}
      </section>
    );
  }
}

export default ProfileCardsWrapper;
