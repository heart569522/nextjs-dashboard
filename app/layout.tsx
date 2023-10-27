import '@/app/ui/global.css'
import { noto_sans_thai } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto_sans_thai.className} antialiased`}>{children}</body>
    </html>
  );
}
