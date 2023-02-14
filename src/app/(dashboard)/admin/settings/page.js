"use client";
import { motion } from "framer-motion";

export default function AdminDashboardSetting() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} class="admin-dashboard">
            <div class="container-fluid">
                <div class="admin-dashboard-header">
                    <h2>Admin Dashboard Settings</h2>
                </div>
                <div className="admin-dashboard-body">
                    <div class="admin-dashboard-sidebar">
                        <h2>Side Menu</h2>
                    </div>
                    <div class="admin-dashboard-main">
                        <h2>Dashboard</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}