import '../styles/globals.css';
import { poppins, nunito_sans } from '../utils/fonts';
import HomeContextProvider from './context/HomeContext';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins} ${nunito_sans}`}>
        <main className='nunito_sans'>
          <HomeContextProvider>{children}</HomeContextProvider>
        </main>
      </body>
    </html>
  );
}
