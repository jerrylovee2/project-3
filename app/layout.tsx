import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';

// Import and configure the Playfair Display font
const playfair = Playfair_Display({
  subsets: ['latin'], // Define the subset for the font
  weight: ['400', '700'], // Specify font weights (regular and bold in this case)
  display: 'swap', // Optional: Improves loading performance
});

export const metadata: Metadata = {
  title: 'Hadleyinn',
  description: 'Hadley Inn',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  );
}
