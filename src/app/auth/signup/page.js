'use client';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import Image from "next/image";

export default function SignUp() {
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
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="password" className="form-control" placeholder="Password" />
                    <button type="submit" className="btn">Sign Up</button>
                </div>
                <div className="auth-form-text">
                    <p>Already have an account? <a onClick={() => router.push('/auth/signin')}>Sign in!</a></p>
                </div>
            </form>
        </motion.div>
    );
}