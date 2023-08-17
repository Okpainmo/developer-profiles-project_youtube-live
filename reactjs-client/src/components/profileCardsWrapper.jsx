import ProfileCard from './ProfileCard';

function profileCardsWrapper(myProps) {
  const { profilesData, handleShowOverlay, handleSetProfileToDelete } = myProps;
  console.log(profilesData);

  if (!profilesData) {
    return (
      <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
        Loading developer profiles...
      </p>
    );
  }

  if (profilesData && profilesData.profiles.length < 1) {
    return (
      <p className='my-40 text-center text-gray-400 text-[20px] mx-auto'>
        No profiles added yet!!! <br /> Please add one or more profiles to see
        them here.
      </p>
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
          return (
            <ProfileCard
              key={_id}
              profile={profile}
              handleShowOverlay={handleShowOverlay}
              handleSetProfileToDelete={handleSetProfileToDelete}
            />
          );
        })}
      </section>
    );
  }
}

export default profileCardsWrapper;
