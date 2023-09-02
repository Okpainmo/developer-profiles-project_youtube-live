import React from 'react';
import UpdateProfileFormWrapper from './UpdateProfileFormWrapper';

export const dynamic = 'force-dynamic';

export const metadata = {
  title:
    'Update Profile | full stack project with the MERN stack, tailwindcss and HTML',
  description: 'full stack project with the MERN stack, tailwindcss and HTML',
};

async function UpdateProfile({ params }) {
  //   const { updateProfilePageId: profileId } = params;
  // console.log(params);
  const profileId = params.updateProfilePageId;

  const url = `https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-profile/${profileId}`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <main className='py-[70px] px-3 sm:w-[600px] md:w-[650px] sm:mx-auto text-[14px] nunito-sans'>
      <UpdateProfileFormWrapper data={data} profileId={profileId} />
    </main>
  );
}

export default UpdateProfile;
