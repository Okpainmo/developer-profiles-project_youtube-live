import { Outlet } from 'react-router-dom';

function UpdateProfilePageWrapper() {
  return (
    <main className='py-[70px] px-3 sm:w-[600px] md:w-[650px] sm:mx-auto text-[14px] nunito-sans'>
      <Outlet />
    </main>
  );
}

export default UpdateProfilePageWrapper;
