import '../styles/globals.css';
import { poppins, nunito_sans } from '../utils/fonts';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins} ${nunito_sans}`}>
        <main className='nunito_sans'>{children}</main>
      </body>
    </html>
  );
}
