"use client";
import { motion } from "framer-motion";

export default function AdminDashboardSetting() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} className="admin-dashboard">
            <div className="container-fluid">
                <div className="admin-dashboard-header">
                    <h2>Admin Dashboard Settings</h2>
                </div>
                <div classNameName="admin-dashboard-body">
                    <div className="admin-dashboard-sidebar">
                        <h2>Side Menu</h2>
                    </div>
                    <div className="admin-dashboard-main">
                        <h2>Dashboard</h2>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}