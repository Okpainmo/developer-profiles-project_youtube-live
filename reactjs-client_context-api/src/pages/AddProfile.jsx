import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProfile() {
  const navigate = useNavigate();

  const [developerProfileData, setDeveloperProfileData] = useState({
    fullName: '',
    email: '',
    website: '',
    about: '',
  });
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    document.title =
      'Add profile | full stack project with the MERN stack, tailwind-css and HTML';
  });

  async function handleAddProfile(e) {
    e.preventDefault();
    setShowLoadingModal(true);

    const url =
      'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/create-profile';
    const newProfile = await axios.post(url, developerProfileData);
    // console.log(newProfile);

    if (
      newProfile &&
      newProfile.data.responseMessage === 'profile created successfully'
    ) {
      setShowLoadingModal(false);
      setShowSuccessModal(true);

      setDeveloperProfileData({
        fullName: '',
        email: '',
        website: '',
        about: '',
      });

      setTimeout(() => {
        setShowSuccessModal(true);
        navigate('/');
      }, 2000);
    }
  }

  return (
    <main className='py-[70px] px-3 sm:w-[600px] md:w-[650px] sm:mx-auto text-[14px] nunito-sans'>
      <section className='pop-ups relative'>
        {/* <!-- progress modal --> */}
        <div
          className={`progress-modal rounded w-[280px] sm:w-[500px] px-4 py-3 text-center bg-blue-100 
        text-blue-900 ${
          showLoadingModal ? 'block' : 'hidden'
        } absolute top-0 left-0 right-0 mx-auto`}
        >
          Developer profile is being created, please wait.
        </div>

        {/* <!-- success modal --> */}
        <div
          className={`success-modal rounded w-[280px] sm:w-[500px] px-4 py-3 text-center bg-green-100 
        text-green-900 ${
          showSuccessModal ? 'block' : 'hidden'
        } absolute top-0 left-0 right-0 mx-auto`}
        >
          Developer profile created successfully
        </div>
      </section>

      <header className='section-header text-center'>
        <h1 className='text-3xl text-blue-900 font-bold poppins'>
          Add Developer Profile
        </h1>
        <p className='sm:text-[16px] mt-4'>
          Please use a different/unique email for every profile you're creating.
        </p>
      </header>
      <section className='form-wrapper mt-16'>
        <form onSubmit={handleAddProfile} className='add-profile-form'>
          <div className='full-name input-group flex flex-col gap-3 mb-5'>
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
              About
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
            Add Profile
          </button>
        </form>
      </section>
    </main>
  );
}

export default AddProfile;
