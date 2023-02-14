"use client";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }}>
            <section class="admin-dashboard">
                <div class="container-fluid">
                    <div class="admin-dashboard-header">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="admin-dashboard-body">
                        <div class="admin-dashboard-sidebar">
                            <h2>Side Menu</h2>
                        </div>
                        <div class="admin-dashboard-main">
                            {children}
                        </div>
                    </div>
                </div>
            </section>

        </motion.div>
    );
}