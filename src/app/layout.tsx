// next
import type { Metadata } from 'next';
// styles
import '@/assets/styles/globals.scss';

export const metadata: Metadata = {
    title: 'Cats',
    description: 'Cats Pinterest',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
