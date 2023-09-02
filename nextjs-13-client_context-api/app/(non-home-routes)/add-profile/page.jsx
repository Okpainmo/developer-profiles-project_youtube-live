import AddProfilePageChild from './AddProfilePageChild';

export const metadata = {
  title:
    'Add Profile | full stack project with the MERN stack, tailwindcss and HTML',
  description: 'full stack project with the MERN stack, tailwindcss and HTML',
};

function AddProfile() {
  return (
    <main className='py-[70px] px-3 sm:w-[600px] md:w-[650px] sm:mx-auto text-[14px] nunito-sans'>
      <AddProfilePageChild />
    </main>
  );
}

export default AddProfile;
