"use client";
import AOS from 'aos';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import './styles/globals.css';
import "./styles/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'aos/dist/aos.css';

import Header from './components/Header';
import Footer from './components/Footer';
import GoToTop from "./components/GoToTop";

export default function RootLayout({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <html lang="en">
            <head />
            <body>
                {pathname.startsWith('/admin/dashboard') ? <></> : <Header />}
                {children}
                {pathname.startsWith('/admin/dashboard') ? <></> : <Footer />}
                <h1>{pathname.startsWith('admin')}</h1>
                <GoToTop />
            </body>
        </html>
    );
}
