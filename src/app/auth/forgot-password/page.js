'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function ForgotPassword() {
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
                    <input type="text" className="form-control" placeholder="Enter Valid Email Address" />
                    <button type="submit" className="btn">Send Reset Link</button>
                </div>
                <div className="auth-form-text">
                    <p>We will send a password to your Email</p>
                </div>
            </form>
        </motion.div>
    );
}