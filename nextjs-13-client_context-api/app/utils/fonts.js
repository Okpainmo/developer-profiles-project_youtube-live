import { Poppins, Nunito_Sans } from 'next/font/google';

const nunito_sans_init = Nunito_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito_sans',
  weight: '300',
});

const poppins_init = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '600'],
});

export const nunito_sans = nunito_sans_init.variable;
export const poppins = poppins_init.variable;
