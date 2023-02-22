'use client';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Image from "next/image";

export default function SignIn() {
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} class="auth">
            <form className="auth-form" onSubmit={handleSubmit}>
                <div className="auth-form-logo">
                    <Image src="/images/logo.png" alt="" width={127} height={38} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email/Username" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button type="submit" className="btn">Sign In</button>
                </div>
                <div className="auth-form-text">
                    <p>Don't have an account? <a onClick={() => router.push('/auth/signup')}>Sign up!</a></p>
                    <a onClick={() => router.push('/auth/forgot-password')}>Forgot password?</a>
                </div>
            </form>
        </motion.div>
    );
}