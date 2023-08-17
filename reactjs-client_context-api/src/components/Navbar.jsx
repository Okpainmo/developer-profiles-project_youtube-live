import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HomeContext } from '../context/HomeContext';

function Navbar() {
  const { testFunction, profilesData } = useContext(HomeContext);

  return (
    <nav className='navbar flex justify-between items-center py-4 md:px-[20px] lg:px-[10%]'>
      <div className='nav-left flex gap-4 items-center'>
        <span className='font-bold sm:text-[16px]'>Developer profiles</span>
        <div
          className='profiles-counter bg-blue-900 text-white py-1 px-4 rounded'
          onClick={testFunction}
        >
          {profilesData ? profilesData.profilesCount : 'X'}
        </div>
      </div>
      <div className='nav-right'>
        <Link
          to='./add-profile'
          className='add-profile-button bg-black text-white rounded px-6 py-1 font-bold sm:text-[16px] sm:py-2'
          type='button'
        >
          Add Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
