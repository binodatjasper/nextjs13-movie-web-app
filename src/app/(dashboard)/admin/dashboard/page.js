"use client";
import React from 'react'
import { motion } from "framer-motion";
import { useRouter } from 'next/router';

export default function AdminDashboard() {

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
            <h2>Dashboard</h2>
        </motion.div>
    );
}