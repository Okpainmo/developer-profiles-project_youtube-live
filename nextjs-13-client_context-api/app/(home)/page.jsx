import Navbar from './components/Navbar';
import ProfileCardsWrapper from './components/ProfileCardsWrapper';
import HomeOverlay from './components/HomeOverlay';

// export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Home | full stack project with the MERN stack, tailwindcss and HTML',
  description: 'full stack project with the MERN stack, tailwindcss and HTML',
};

async function Home() {
  const url =
    'https://developer-profiles-project-youtube-live.onrender.com/api/v1/profiles/get-all-profiles';
  const res = await fetch(url, { cache: 'no-store' });

  const serverData = await res.json();
  // console.log(serverData);

  return (
    <main className='main-wrapper nunito-sans text-[14px] px-3 pb-[100px] bg-blue-50 min-h-screen'>
      <HomeOverlay />
      <Navbar serverData={serverData} />
      <ProfileCardsWrapper serverData={serverData} />
    </main>
  );
}

export default Home;
