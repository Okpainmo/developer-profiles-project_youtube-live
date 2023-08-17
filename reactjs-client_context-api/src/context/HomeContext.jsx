import { createContext, useState } from 'react';
import axios from 'axios';

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [profileToDelete, setProfileToDelete] = useState(null);
  const [isProfileDeleted, setIsProfileDeleted] = useState(false);
  const [profilesData, setProfilesData] = useState(null);

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
    <HomeContext.Provider
      value={{
        showOverlay,
        handleShowOverlay,
        handleHideOverlay,
        isProfileDeleted,
        setIsProfileDeleted,
        handleDeleteProfile,
        handleSetProfileToDelete,
        setProfilesData,
        profilesData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export default HomeContextProvider;
