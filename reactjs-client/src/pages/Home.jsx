import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import ProfileCardsWrapper from '../components/profileCardsWrapper';

function Home() {
  const [profilesData, setProfilesData] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);

  useEffect(() => {
    document.title =
      'Home | full stack project with the MERN stack, tailwind-css and HTML';
  }, []);

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
  }, [isProfileDeleted]);

  function handleShowOverlay() {
    setShowOverlay(true);
  }

  function handleHideOverlay() {
    setShowOverlay(false);
  }

  function handleSetProfileToDelete(id) {
    setProfileToDelete(id);
  }

  async function handleDeleteProfile() {
    console.log(profileToDelete);
    handleHideOverlay();

    const deletedProfile = await axios.delete(
      `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/delete-profile/${profileToDelete}`
    );

    setIsProfileDeleted(true);

    if (
      deletedProfile &&
      deletedProfile.data.responseMessage === 'profile deleted successfully'
    ) {
      console.log('profile deleted successfully');
    }
  }

  return (
    <main className='main-wrapper nunito-sans text-[14px] px-3 pb-[100px] bg-blue-50 min-h-screen'>
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

      <Navbar profilesData={profilesData} />
      <ProfileCardsWrapper
        profilesData={profilesData}
        handleShowOverlay={handleShowOverlay}
        handleSetProfileToDelete={handleSetProfileToDelete}
      />
    </main>
  );
}

export default Home;
