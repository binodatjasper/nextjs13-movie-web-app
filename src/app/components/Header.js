'use client';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Header() {
    const router = useRouter();

    return (
        <header className='header'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-2">
                        <div className="header-logo">
                            <a onClick={() => router.push('/')}>
                                <Image src="/images/logo.png" alt="" width={127} height={38} />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="header-nav">
                            <nav>
                                <ul>
                                    <li>
                                        <a onClick={() => router.push('/home')}>Home</a>
                                    </li>
                                    <li>
                                        <a onClick={() => router.push('/about')}>About Us</a>
                                    </li>
                                    <li>
                                        <a onClick={() => router.push('/pricing')}>Pricing</a>
                                    </li>
                                    <li>
                                        <a onClick={() => router.push('/faq')}>FAQ</a>
                                    </li>
                                    <li>
                                        <a onClick={() => router.push('/contact')}>Contact Us</a>
                                    </li>
                                    <li>
                                        <a onClick={() => router.push('/admin/dashboard')}>Dashboard</a>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li>
                                        <a onClick={() => router.push('/auth/signin')}>SignIn</a>
                                    </li>
                                    <li>
                                        <a onClick={() => router.push('/auth/signup')}>SignUp</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}