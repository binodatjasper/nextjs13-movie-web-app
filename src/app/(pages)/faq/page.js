"use client";
import { motion } from "framer-motion";

import FAQContentList from "./FAQContentList";

export default function FAQ() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.75 }} class="content">
            <div className="container">
                <div className="content__container">
                    <div className="page-title">
                        <h1>FAQ</h1>
                        <div className="page_title_bar"></div>
                    </div>
                    <div className="page-content">
                        <FAQContentList />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}