import './globals.css';

export const metadata = {
  title: 'Pomodoro Timer',
  description: 'A modern Pomodoro Timer with cosmic background',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}