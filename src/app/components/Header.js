import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <div className="row">
                    <div className="col-sm-2">
                        <div className="header-logo">
                            <Link href="/">
                                <Image src="/images/logo.png" alt="" width={127} height={38} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-10">
                        <div className="header-nav">
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/home">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/admin/dashboard">Dashboard</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/auth/signin">SignIn</Link>
                                    </li>
                                    <li>
                                        <Link href="/auth/signup">SignUp</Link>
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